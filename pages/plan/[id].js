import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../utils/context/authContext';
import { getPlanById } from '../../api/planData';
import AddTeamToPlanForm from '../../components/Forms/AddTeamToPlanForm';
import { getTeamByPlanId } from '../../api/teamData';

export default function PlanDetails() {
  const [plan, setPlan] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [show, setShow] = useState(false);
  const [teams, setTeams] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formatDate = (originalDateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Create a Date object from the original date string
    const originalDate = new Date(originalDateString);

    const dayOfWeekIndex = originalDate.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    const monthIndex = originalDate.getMonth();
    const month = months[monthIndex];

    const day = originalDate.getDate();
    const year = originalDate.getFullYear();

    // Form the reformatted date string in MM-DD-YYYY format
    const reformattedDateString = `${dayOfWeek},${month} ${day} ${year}`;
    return reformattedDateString;
  };

  const myDate = formatDate(plan?.date);
  useEffect(() => {
    getPlanById(id).then(setPlan);
    getTeamByPlanId(id).then(setTeams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex gap-5 mt-5">
        <p className="fs-1 me-5 fw-bold">{plan.name}</p>
        <p className="fs-2 align-self-end justify-content-end"> {myDate}</p>
      </div>

      <div className="mt-5">
        <p className="fs-3 fw-bold">Details</p>
        <p className="ms-3 fs-4"> {plan.details}</p>

      </div>
      {user.isTeamLead && (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Team to Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddTeamToPlanForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" className="btn-sm" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="mt-5 fs-5">
            <p className="fs-3 fw-bold">Teams</p>
            <ul className="mb-5">
              {teams.map((team) => <Link key={team.id} href={`/teamDetails/${team.id}`} passHref><li className="cursor w-25 fs-4" key={team.id}>{team.name}</li></Link>)}
            </ul>
          </div>
          <Button variant="dark" className="mt-5" onClick={handleShow}>
            Add Team
          </Button>
        </>
      )}
    </>
  );
}
