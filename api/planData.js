const dbUrl = 'https://localhost:7120';

// GET All Plans
const getAllPlans = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Plans/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET Single Plan by Id
const getPlanById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Plan/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create New Plan
const createPlan = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Plan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Update Plan
const updatePlan = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Plan/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

// Delete a Plan
const deletePlan = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/Plan/${id}`, {
    method: 'DELETE',
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPlans,
  getPlanById,
  createPlan,
  updatePlan,
  deletePlan,
};
