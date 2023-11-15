import React, { useState } from 'react';

const AssignPrivilegeForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeamLead, setIsTeamLead] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Perform any further actions with isAdmin and isTeamLead here
    console.warn('isAdmin:', isAdmin);
    console.warn('isTeamLead:', isTeamLead);

    // For demonstration purposes, you might want to send this data to a server
    // For now, let's just log the values
  };

  const handleAdminCheckboxChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleTeamLeadCheckboxChange = (event) => {
    setIsTeamLead(event.target.checked);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="roleSelect">Select Role:</label>
      <select id="roleSelect">
        <option value="role1">Role 1</option>
        <option value="role2">Role 2</option>
        {/* Add more options if needed */}
      </select>

      <label htmlFor="departmentSelect">Select Department:</label>
      <select id="departmentSelect">
        <option value="dept1">Department 1</option>
        <option value="dept2">Department 2</option>
        {/* Add more options if needed */}
      </select>

      <label htmlFor="isAdminCheckbox">Admin:</label>
      <input
        type="checkbox"
        id="isAdminCheckbox"
        checked={isAdmin}
        onChange={handleAdminCheckboxChange}
      />

      <label htmlFor="isTeamLeadCheckbox">Team Lead:</label>
      <input
        type="checkbox"
        id="isTeamLeadCheckbox"
        checked={isTeamLead}
        onChange={handleTeamLeadCheckboxChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AssignPrivilegeForm;
