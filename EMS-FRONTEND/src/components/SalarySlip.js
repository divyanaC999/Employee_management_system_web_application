// SalarySlip.js
import React, { useState, useEffect } from 'react';
import './SalarySlip.css';

const calculateNetSalary = (employee) => {
  const allowances = 1500;
  const deductions = employee.taxId ? employee.otherDeductions + 500 : employee.otherDeductions;
  const netSalary = employee.salary + allowances - deductions;

  return netSalary;
};


const increaseEmployeeID = (employee) => {
  // Assuming the employee ID is a numeric value
  return { ...employee, employeeId: employee.employeeId + 1 };
};

const SalarySlip = () => {
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
      .then(data => setEmployeeDetails((data.map(increaseEmployeeID)))) // Shuffle the array and increase employee ID
      .catch(error => {
        console.error('Error fetching employee details:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="salary-slip-container">
      <h1 className="salary-slip-title">Salary Slip</h1>
      {employeeDetails.map((employee) => (
        <div key={employee.id} className="salary-slip">
          <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
          <p><span style={{ color: "red" }}>Employee ID:</span> {employee.employeeId}</p>

          <p>Basic Salary: {employee.salary}</p>
          <p>Allowances: 2000</p>
          <p>Deductions: {employee.otherDeductions}</p>
          <p><b>Net Salary: {calculateNetSalary(employee)} ₹</b> </p>
        </div>
      ))}
    </div>
  );
};

export default SalarySlip;
