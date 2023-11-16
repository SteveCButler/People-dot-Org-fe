const dbUrl = 'https://localhost:7120';

const getAllTeams = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/teams/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getTeamById = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/singleTeam/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getTeamByTeamLeadId = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/team/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// Create New Team
const createTeam = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/team/`, {
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

// Add New Team Lead
const addTeamLead = (payload, teamId, personId) => new Promise((resolve, reject) => {
  console.warn('Fetch-Payload: ', payload);
  fetch(`${dbUrl}/api/team/${teamId}/${personId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTeam = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/api/team/${id}`, {
    method: 'DELETE',
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllTeams,
  getTeamById,
  createTeam,
  deleteTeam,
  addTeamLead,
  getTeamByTeamLeadId,
};
