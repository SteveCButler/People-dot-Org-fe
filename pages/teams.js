import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import TeamList from '../components/TeamList';
import { getAllTeams } from '../api/teamData';
import { useAuth } from '../utils/context/authContext';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const { user } = useAuth();

  const getTeams = () => {
    getAllTeams()?.then(setTeams);
  };

  useEffect(() => {
    getTeams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="mt-5 mb-3">Teams</h1>
      <Table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th colSpan={2}>Description</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => <TeamList key={team.id} teamObj={team} admin={user.isAdmin} onUpdate={getTeams} />)}
        </tbody>
      </Table>
      <TeamList />
    </>
  );
}
