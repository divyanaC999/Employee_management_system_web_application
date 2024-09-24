
import React from 'react';
import './DepartmentHierarchy.css';
const DepartmentNode = ({ department }) => {
  return (
    <div className="department-node">
     <b> <h3>{department.name}</h3></b>
      <p>{department.description}</p>

      {department.children && (
        <div className="children">
          {department.children.map((child) => (
            <DepartmentNode key={child.id} department={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const DepartmentHierarchy = () => {
  const departmentsData = [
    {
      id: 1,
      name: 'Company',
      description: 'EMPLOYEE MANAGEMENT SYSTEM',
      children: [
        {
          id: 2,
          name: 'HR Department',
          description: 'Human Resources Department',
        },
        {
          id: 3,
          name: 'Finance Department',
          description: 'Financial Operations Department',
        },
        {
          id: 4,
          name: 'Marketing Department',
          description: 'Marketing and Sales Department',
          children: [
            {
              id: 7,
              name: 'Digital Marketing Team',
              description: 'Handles online marketing strategies',
            },
            {
              id: 8,
              name: 'Content Team',
              description: 'Creates engaging content for promotions',
            },
          ],
        },
        {
          id: 5,
          name: 'Delivery Department',
          description: 'Product and Service Delivery',
        },
      ],
    },
  ];

  return (
    <div className="department-hierarchy">
      <h1>DEPARTMENT HIERARCHY</h1>
      {departmentsData.map((department) => (
        <DepartmentNode key={department.id} department={department} />
      ))}
    </div>
  );
};

export default DepartmentHierarchy;
