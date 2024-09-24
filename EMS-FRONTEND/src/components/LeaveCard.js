import React, { useState, useEffect } from 'react';

import './LeaveCardList.css'; // Import the CSS file for styling

const LeaveCard = ({ leave }) => {
  return (
    <div className="leave-card">
      <h3 className="leave-type">{leave.leaveType}</h3>
      <p className="leave-description">{leave.description}</p>
      <p className="leave-duration">Duration: {leave.duration} days</p>
    </div>
  );
};

const LeaveCardList = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:8080/leave/leaves')
      .then((response) => response.json())
      .then((data) => setLeaves(data))
      .catch((error) => console.error('Error fetching leaves:', error));
  }, []); 

  return (
    <div className="leave-card-list">
      <h1 className="leave-card-list-title">LEAVE CATEGORY AND INFORMATION</h1>
      <div className="leave-card-container">
        {leaves.map((leave) => (
          <LeaveCard key={leave.id} leave={leave} />
        ))}
      </div>
    </div>
  );
};

export default LeaveCardList;
