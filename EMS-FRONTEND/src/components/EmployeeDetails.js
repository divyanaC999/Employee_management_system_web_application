// EmployeeDetails.js
import React, { useState, useEffect } from 'react';
import './EmployeeDetails.css'; // Import a CSS file for styling
import womanImage from '../assets/f.png';

const EmployeeDetails = () => {
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
    <div className="employee-details-container">
      <h1>EMPLOYEE- MASTER DATA</h1>
      {employeeDetails.map(employee => (
        <div key={employee.id} className="employee-card">
          <img
            src={womanImage} 
            alt={`${employee.firstName} ${employee.lastName}`}
            className="profile-picture"
          />
          <div className="employee-info">
            <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
            <p className="key">Email:</p>
            <p>{employee.emailId}</p>
            <p className="key">Phone:</p>
            <p>{employee.phone}</p>
            <p className="key">Date of Birth:</p>
            <p>{employee.dateOfBirth}</p>
            <p className="key">Gender:</p>
            <p>{employee.gender}</p>

            {/* Address Information */}
            <div className="comment">Address Information</div>
            <p className="key">Address:</p>
            <p>{`${employee.addressLine1}, ${employee.addressLine2}, ${employee.city}, ${employee.state}, ${employee.postalCode}, ${employee.country}`}</p>

            {/* Employment Information */}
            <div className="comment">Employment Information</div>
            <p className="key">Employee ID:</p>
            <p>{employee.employeeId}</p>
            <p className="key">Department:</p>
            <p>{employee.department}</p>
            <p className="key">Position:</p>
            <p>{employee.position}</p>
            <p className="key">Date of Joining:</p>
            <p>{employee.dateOfJoining}</p>
            <p className="key">Employment Status:</p>
            <p>{employee.employmentStatus}</p>
            <p className="key">Salary:</p>
            <p>{employee.salary}</p>
            <p className="key">Manager:</p>
            <p>{employee.manager}</p>

            {/* Financial Information */}
            <div className="comment">Financial Information</div>
            <p className="key">Bank Account Number:</p>
            <p>{employee.bankAccountNumber}</p>
            <p className="key">Tax ID:</p>
            <p>{employee.taxId}</p>
            <p className="key">Other Deductions:</p>
            <p>{employee.otherDeductions}</p>

            {/* Personal Information */}
            <div className="comment">Personal Information</div>
            <p className="key">Emergency Contact:</p>
            <p>{`${employee.emergencyContactName}, ${employee.emergencyContactPhone}`}</p>
            <p className="key">Marital Status:</p>
            <p>{employee.maritalStatus}</p>
            <p className="key">Dependents:</p>
            <p>{employee.dependents}</p>
            <p className="key">Nationality:</p>
            <p>{employee.nationality}</p>
            <p className="key">Ethnicity:</p>
            <p>{employee.ethnicity}</p>

            {/* Leave and Attendance */}
            <div className="comment">Leave and Attendance</div>
            <p className="key">Leave Balance:</p>
            <p>{employee.leaveBalance}</p>

            {/* Health Information */}
            <div className="comment">Health Information</div>
            <p className="key">Medical Insurance Info:</p>
            <p>{employee.medicalInsuranceInfo}</p>
            <p className="key">Allergies:</p>
            <p>{employee.allergies}</p>
            <p className="key">Medical Conditions:</p>
            <p>{employee.medicalConditions}</p>

            {/* Training and Certification */}
            <div className="comment">Training and Certification</div>
            <p className="key">Training History:</p>
            <p>{employee.trainingHistory}</p>
            <p className="key">Certification Details:</p>
            <p>{employee.certificationDetails}</p>

            {/* Other Information */}
            <div className="comment">Other Information</div>
            <p className="key">Notes:</p>
            <p>{employee.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDetails;
