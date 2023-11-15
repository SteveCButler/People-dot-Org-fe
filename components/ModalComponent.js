import { useState } from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ regForm, formTitle }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{formTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {regForm}
        </Modal.Body>

      </Modal>
    </>
  );
}

export default ModalComponent;

ModalComponent.propTypes = {
  regForm: PropTypes.element.isRequired,
  formTitle: PropTypes.string.isRequired,
};
