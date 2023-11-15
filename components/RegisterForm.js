import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth';
import { updatePerson } from '../api/peopleData';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  isAdmin: false,
  isTeamLead: false,

};
function RegisterForm({ user, personObj }) {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (personObj.id) {
      setFormData(personObj);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (personObj.id) {
      updatePerson(formData).then(router.push('/profile'));
    } else {
      const payload = { ...formData, uid: user.uid };
      registerUser(payload).then(router.push('/plans'));
    }
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="(nnn-nnn-nnnn)"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  personObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),

};

RegisterForm.defaultProps = {
  personObj: initialState,
};
export default RegisterForm;
