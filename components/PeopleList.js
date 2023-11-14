import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deletePerson } from '../api/peopleData';

const PeopleList = ({ personObj, admin, onUpdate }) => {
  const fullName = `${personObj?.firstName} ${personObj?.lastName}`;
  const deleteAPerson = () => {
    if (window.confirm(`Do you want to delete ${fullName}?`)) {
      deletePerson(personObj.id).then(() => onUpdate());
    }
  };

  return (

    <tr>
      <td>{fullName}</td>
      <td>{personObj?.email}</td>
      <td>{personObj?.phone}</td>
      <td> {admin && <Button className="btn-sm btn-secondary ms-5" onClick={deleteAPerson}><FontAwesomeIcon icon={faTrash} /></Button>} </td>
    </tr>

  );
};

export default PeopleList;

PeopleList.propTypes = {
  personObj: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  admin: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,

};
