import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteTeam } from '../api/teamData';

const TeamList = ({ teamObj, admin, onUpdate }) => {
  const deleteATeam = () => {
    if (window.confirm(`Do you want to delete ${teamObj.name}?`)) {
      deleteTeam(teamObj.id).then(() => onUpdate());
    }
  };

  return (

    <tr>
      <td>{teamObj?.name}</td>
      <td>{teamObj?.description}</td>
      <td>{admin && <Button className="btn-sm btn-secondary ms-5" onClick={deleteATeam}><FontAwesomeIcon icon={faTrash} /></Button>}</td>
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
