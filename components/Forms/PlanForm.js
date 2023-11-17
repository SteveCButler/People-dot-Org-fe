import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createPlan } from '../../api/planData';

const initialState = {
  name: '',
  details: '',
  date: '',

};
function PlanForm() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData };
    createPlan(payload);
    setFormData(initialState);
  };

  return (
    <Form className="mt-2  bg-secondary p-3 text-white" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 text-start" controlId="formName">
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="plan name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formDetails">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="plan details"
          name="details"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-5 text-start" controlId="formDate">
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

export default PlanForm;
