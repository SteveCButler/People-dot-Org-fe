import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PrivilegeForm = ({ teams, people }) => {
  console.warn('Privileg');

  return (
    <>
      <Form>
        <Form.Select aria-label="People List" className="my-4">
          <option>Select a Person</option>
          {people.map((person) => <option value={person.id}>{person.firstName} {person.lastName}</option>)}
        </Form.Select>

        <Form.Select aria-label="Team List" className="mb-3">
          <option>Select a Team</option>
          {teams.map((team) => <option value={team.id}>{team.name}</option>)}

        </Form.Select>
        <div className="d-flex flex-column gap-2 ">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Team Lead" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check label="Admin" type="checkbox" />
          </Form.Group>

        </div>
      </Form>
      <Button>Assign</Button>
    </>

  );
};

export default PrivilegeForm;

PrivilegeForm.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,

};
