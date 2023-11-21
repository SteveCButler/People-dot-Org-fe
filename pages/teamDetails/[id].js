import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getTeamById, removePersonFromTeam } from '../../api/teamData';
import { useAuth } from '../../utils/context/authContext';
import RequestToServeForm from '../../components/Forms/RequestToServeForm';

export default function TeamDetail() {
  const [people, setPeople] = useState([]);
  const [team, setTeam] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTeam = () => {
    getTeamById(id).then((data) => {
      setTeam(data);
      setPeople(data.people);
    });
  };

  const removeFromTeam = (personId) => {
    if (window.confirm('Do you want to remove this person?')) {
      removePersonFromTeam(team.id, personId).then(() => getTeam());
    }
  };

  useEffect(() => {
    getTeam();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p className="fs-1 fw-bold  mt-4">{team.name} Members</p>
      <Table className="mt-4 w-50">
        <thead className="">
          <tr>
            <th className="fs-4 table-dark" colSpan={2}>Member Name</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td>{person.firstName}&nbsp;{person.lastName}</td>
              <td> {user.isTeamLead && <Button className="btn-sm btn-secondary ms-5" onClick={() => removeFromTeam(person.id)}><FontAwesomeIcon className="me-2" icon={faTrash} />Remove</Button>} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {user.isTeamLead && (
        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Request To Serve</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RequestToServeForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark" className="btn-sm" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Button variant="dark" className="mt-5" onClick={handleShow}>
            Request to Serve
          </Button>
        </>
      )}

    </>
  );
}
