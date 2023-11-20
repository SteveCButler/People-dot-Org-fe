import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteTeam } from '../api/teamData';
import { useAuth } from '../utils/context/authContext';

const TeamList = ({ teamObj, admin, onUpdate }) => {
  const { user } = useAuth();

  const deleteATeam = () => {
    if (window.confirm(`Do you want to delete ${teamObj.name}?`)) {
      deleteTeam(teamObj.id).then(() => onUpdate());
    }
  };

  return (

    <tr>
      <td className="fw-semibold"><Link href={`/teamDetails/${teamObj.id}`} passHref>{teamObj?.name}</Link></td>
      <td>{teamObj?.description}</td>
      <td>{admin ? (<Button className="btn-sm btn-secondary ms-5" onClick={deleteATeam}><FontAwesomeIcon icon={faTrash} /></Button>) : user.isTeamLead && (
        <Link href={`/teamDetails/${teamObj.id}`} passHref>
          <Button className="bg-dark btn-sm bg-opacity-75 border-0">Edit</Button>
        </Link>
      )}
      </td>
    </tr>

  );
};

export default TeamList;

TeamList.propTypes = {
  teamObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  admin: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,

};
