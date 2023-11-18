import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { deletePlan } from '../api/planData';

const PlansList = ({ planObj, onUpdate }) => {
  const router = useRouter();

  const deleteAPlan = () => {
    if (window.confirm(`Do you want to delete ${planObj?.name}?`)) {
      deletePlan(planObj?.id).then(() => onUpdate());
    }
  };

  return (

    <tr>
      <td>{planObj?.name}</td>
      <td>{planObj?.details}</td>
      <td>{planObj?.date}</td>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <td>
        <Button className="btn-sm btn-secondary ms-5 my-1" onClick={deleteAPlan}><FontAwesomeIcon icon={faTrash} /></Button>
        <Button className="btn-sm btn-secondary ms-5" onClick={() => router.push(`/plan/${planObj.id}`)}><FontAwesomeIcon icon={faPencil} /></Button>
      </td>
    </tr>

  );
};

export default PlansList;

PlansList.propTypes = {
  planObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    details: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,

};
