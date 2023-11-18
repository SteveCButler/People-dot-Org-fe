import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuth } from '../../utils/context/authContext';
import { getPlanById } from '../../api/planData';

export default function PlanDetails() {
  const [plan, setPlan] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [show, setShow] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex gap-5 mt-5">
        <p className="fs-1 me-5">{plan.name}</p>
        <p className="fs-3 align-self-end justify-content-end"> {myDate}</p>
      </div>

      <div className="fs-4 ms-3 mt-5">
        <p className="fw-semibold">Details:</p>
        <p className="ms-3"> {plan.details}</p>

      </div>
      {user.isTeamLead && (
        <>
          <Button variant="secondary" onClick={handleShow}>
            Add Team
          </Button>

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
              I will not close if you click outside me. Don not even try to press
              escape key.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="dark">Submit</Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
}
