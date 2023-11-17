import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { getPersonById } from '../../api/peopleData';
import { addPersonToTeam } from '../../api/teamData';

const AddTeamMember = ({ teams, people }) => {
  const [formData, setFormData] = useState({});
  // const [teamData, setTeamData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // getPersonById(formData.personId).then(setPersonData);
    // getTeamById(formData.teamId).then(setTeamData);
    const payload = { ...formData };
    addPersonToTeam(payload).then(() => {
      window.alert('Person has been assigned');
    });
  };

  return (
    <>
      <Form className="mt-2  bg-secondary p-3 text-white" onSubmit={handleSubmit}>
        <Form.Select
          aria-label="People List"
          className="my-4"
          name="personId"
          onChange={handleChange}
          value={formData.id}
          required
        >
          <option>Select a Person</option>
          {people.map((person) => <option key={person.id} value={person.id}>{person.firstName} {person.lastName}</option>)}
        </Form.Select>

        <Form.Select
          aria-label="Team List"
          className="mb-3"
          name="teamId"
          onChange={handleChange}
          value={formData.id}
          required
        >
          <option>Select a Team</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}

        </Form.Select>

        <Button variant="dark" type="submit">Assign</Button>
      </Form>
    </>

  );
};

AddTeamMember.propTypes = {
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
export default AddTeamMember;
