// import { useState, useEffect } from 'react';
import TeamForm from '../components/Forms/TeamForm';
// import PrivilegeForm from '../components/Forms/PrivilegeForm';
// import { getAllPeople } from '../api/peopleData';
// import { getAllTeams } from '../api/teamData';
import AssignPrivilegeForm from '../components/Forms/AssignPrivilegeForm';

export default function People() {
  // const [people, setPeople] = useState([]);
  // const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   getAllPeople().then(setPeople);
  //   getAllTeams().then(setTeams);
  // }, []);

  return (
    <>
      <div className="mt-5">
        <h1>Add Team</h1>
        <TeamForm />
      </div>
      <div className="mt-5">
        <h1>Assign Privileges</h1>
        {/* <PrivilegeForm teams={teams} people={people} /> */}
        <AssignPrivilegeForm />
      </div>
    </>

  );
}
