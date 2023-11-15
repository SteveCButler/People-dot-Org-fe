import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTeam } from '../../api/teamData';

const initialState = {
  name: '',
  description: '',
};

function TeamForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData };
    console.warn('Payload: ', payload);
    createTeam(payload).then(() => {
      window.alert(`${payload.name} has been created`);
    });
    setFormData(initialState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTeamName">
        <Form.Label>Team Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter a name for the team"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="enter a description for the team"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TeamForm;
