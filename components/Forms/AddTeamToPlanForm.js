import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
// import { getPersonById } from '../../api/peopleData';
import { addTeamToPlan, getAllTeams, getTeamById } from '../../api/teamData';

const AddTeamToPlanForm = () => {
  const [formData, setFormData] = useState({});
  const [teamData, setTeamData] = useState({});
  const [teams, setTeams] = useState([]);
  const router = useRouter();

  const planId = router.query.id;

  useEffect(() => {
    getAllTeams().then(setTeams);
  }, []);

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
    getTeamById(formData.teamId).then(setTeamData);
    const payload = { teamData };
    console.warn('Payload: ', payload);
    addTeamToPlan(payload, formData.teamId, planId).then(() => {
      window.alert(`${teamData.name} been added`);
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          aria-label="Team List"
          className="my-5"
          name="teamId"
          onChange={handleChange}
          value={formData.id}
          required
        >
          <option>Select a Team</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}

        </Form.Select>

        <Button variant="secondary" type="submit">Add Team</Button>
      </Form>
    </>

  );
};

export default AddTeamToPlanForm;
