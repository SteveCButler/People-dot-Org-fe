const dbUrl = 'https://localhost:7120';

const getAllPeople = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/people/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// Create New Person
const createPerson = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/person`, {
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

// Delete a person
const deletePerson = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/person/${id}`, {
    method: 'DELETE',
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPeople,
  createPerson,
  deletePerson,
};
