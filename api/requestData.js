const dbUrl = 'https://localhost:7120';

// Create New Request
const createRequest = (personId, planId) => new Promise((resolve, reject) => {
  console.warn('personId: ', personId);
  console.warn('planId: ', planId);
  fetch(`${dbUrl}/api/request/${personId}/${planId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default createRequest;
