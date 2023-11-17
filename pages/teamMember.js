import { useState, useEffect } from 'react';
import { getAllPeople } from '../api/peopleData';
import { getAllTeams } from '../api/teamData';
import AddTeamMember from '../components/Forms/AddTeamMember';

const TeamMember = () => {
  const [people, setPeople] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getAllPeople().then(setPeople);
    getAllTeams().then(setTeams);
  }, []);

  return (
    <AddTeamMember people={people} teams={teams} />
  );
};

export default TeamMember;
