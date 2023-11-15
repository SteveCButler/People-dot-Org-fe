import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PrivilegeForm = ({ teams, people }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeamLead, setIsTeamLead] = useState(false);
  const [formData, setFormData] = useState({});

  const handleAdminCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleTeamLeadCheckboxChange = (event) => {
    setIsTeamLead(event.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { ...formData };
    console.warn('PAYLOAD: ', payload);
    // createTeam(payload).then(() => {
    //   window.alert(`${payload.name} has been created`);
    // });
    // Perform any further actions with isAdmin and isTeamLead here
    console.warn('isAdmin:', isAdmin);
    console.warn('isTeamLead:', isTeamLead);

    // For demonstration purposes, you might want to send this data to a server
    // For now, let's just log the values
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          aria-label="People List"
          className="my-4"
          name="id"
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
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        >
          <option>Select a Team</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}

        </Form.Select>
        <div className="d-flex flex-column gap-2 ">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Team Lead"
              id="isTeamLeadCheckbox"
              checked={formData.isTeamLead}
              onChange={handleTeamLeadCheckboxChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              label="Admin"
              type="checkbox"
              id="isAdminCheckbox"
              checked={formData.isAdmin}
              onChange={handleAdminCheckboxChange}
            />
          </Form.Group>

        </div>
      </Form>
      <Button type="submit">Assign</Button>
    </>

  );
};

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
export default PrivilegeForm;
