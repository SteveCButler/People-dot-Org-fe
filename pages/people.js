import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllPeople } from '../api/peopleData';
import { useAuth } from '../utils/context/authContext';
import PeopleList from '../components/PeopleList';

export default function People() {
  const [people, setPeople] = useState([]);
  const { user } = useAuth();

  const getPeople = () => {
    getAllPeople()?.then(setPeople);
  };

  useEffect(() => {
    getPeople();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="mt-5 mb-3">People</h1>
      <Table>
        <thead>
          <tr className="fs-4 table-dark">
            <th>Name</th>
            <th>Email Address</th>
            <th colSpan={2}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => <PeopleList key={person.id} personObj={person} admin={user.isAdmin} onUpdate={getPeople} />)}
        </tbody>
      </Table>

    </>
  );
}
