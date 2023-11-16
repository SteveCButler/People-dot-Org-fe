import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import PlanForm from '../components/Forms/PlanForm';
import { getAllPlans } from '../api/planData';
import PlanList from '../components/PlansList';
import { useAuth } from '../utils/context/authContext';
import { getTeamByTeamLeadId } from '../api/teamData';

export default function TeamLead() {
  const [plans, setPlans] = useState([]);
  const [team, setTeam] = useState({});
  const { user } = useAuth();

  const getPlans = () => {
    getAllPlans().then(setPlans);
    getTeamByTeamLeadId(user.id).then(setTeam);
  };

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      <h1 className="mt-3">{team.name}</h1>
      <div className="d-flex gap-3">
        <div className="w-50">
          <p className="fs-2 mb-0 mt-4">Create Plan</p>
          <PlanForm />
        </div>
        <div className="w-75">
          <p className="fs-2 mb-2 mt-4">Plans</p>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Details</th>
                <th colSpan={2}>Date</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => <PlanList key={plan.id} planObj={plan} onUpdate={getAllPlans} />)}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
