// IDCard.js
import React, { useState, useEffect } from 'react';
import './IDCard.css';
import womanImage from '../assets/woman.png';
import fImage from '../assets/f.png';
import wImage from '../assets/w.png';
import manImage from '../assets/man.png';

const IDCard = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the provided API
    fetch('http://localhost:8080/ed/viewDetails')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setEmployeeDetails(data))
      .catch(error => {
        console.error('Error fetching employee details:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="id-card-container">
      <h1 className="id-card-title">ID CARDS</h1>
      {employeeDetails.map((employee, index) => (
        <div key={employee.id} className="id-card">
          {index === 0 && <img src={womanImage} alt="Profile" className="profile-picture" />}
          {index === 1 && <img src={fImage} alt="Profile" className="profile-picture" />}
          {index === 2 && <img src={wImage} alt="Profile" className="profile-picture" />}
          {index === 3 && <img src={manImage} alt="Profile" className="profile-picture" />}

          <div className="id-card-info">
            <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
            <p>Email: {employee.emailId}</p>
            <p>Phone: {employee.phone}</p>
            <p>Employee ID: {employee.employeeId}</p>
            <p>Department: {employee.department}</p>
            {/* Include other necessary information for the ID card */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IDCard;
