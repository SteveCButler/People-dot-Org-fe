import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createPlan, updatePlan } from '../../api/planData';
import 'react-datepicker/dist/react-datepicker.css';

const initialState = {
  name: '',
  details: '',
  date: '',

};
function PlanForm({ planObj }) {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (planObj?.id) {
      setFormData(planObj);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (planObj.id) {
      updatePlan(formData).then(router.push('/profile'));
    } else {
      const payload = { ...formData };
      console.warn('Payload: ', payload);
      createPlan(payload).then(router.push('/plans'));
    }
  };

  return (
    <Form className="mt-2 bg-secondary p-3 text-white" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="plan name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDetails">
        <Form.Label>Details</Form.Label>
        <Form.Control
          type="text"
          placeholder="plan details"
          name="details"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formDate">
        <Form.Label className="me-3">Plan Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="plan date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

PlanForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  planObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),

};

PlanForm.defaultProps = {
  planObj: initialState,
};
export default PlanForm;
