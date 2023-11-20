import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { getAllPeople } from '../../api/peopleData';
import { getTeamById } from '../../api/teamData';
import createRequest from '../../api/requestData';

const RequestToServeForm = () => {
  const [formData, setFormData] = useState({});
  const [people, setPeople] = useState([]);
  const [team, setTeam] = useState({});
  const router = useRouter();

  const teamId = router.query.id;

  useEffect(() => {
    getAllPeople().then(setPeople);
    getTeamById(teamId).then(setTeam);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const payload = { formData };
    console.warn('Payload: ', payload);
    createRequest(formData.personId, team.planId).then((data) => {
      // window.alert(`${teamData.name} been added`);
      console.warn('DATA: ', data);
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          aria-label="Person List"
          className="my-5"
          name="personId"
          onChange={handleChange}
          value={formData.id}
          required
        >
          <option>Select a person to servce</option>
          {people.map((person) => <option key={person.id} value={person.id}>{person.firstName} {person.lastName}</option>)}

        </Form.Select>

        <Button variant="secondary" type="submit">Request Person</Button>
      </Form>
    </>

  );
};

export default RequestToServeForm;
