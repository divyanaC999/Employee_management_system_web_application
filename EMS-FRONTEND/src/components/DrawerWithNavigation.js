import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrawerWithNavigation.css';
import side from '../assets/icons8-top-square-blocks-followed-by-vertical-columns-25.png';

function DrawerWithNavigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <button onClick={openDrawer} style={{ color: 'white' }}>|||</button>

      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <img src={side} alt="side icon" />
          <h2>EMPLOYEE INFORMATION</h2>
          <button onClick={closeDrawer}>&times;</button>
        </div>
        <ul className="drawer-list">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/">
              Employees{' '}
              <span className="badge" style={{ backgroundColor: '#4caf50' }}>
                5
              </span>
            </Link>
          </li>
          <li>
            <Link to="/ed">Employee Details Master</Link>
          </li>
          <li>
            <Link to="/leaves">Leaves</Link>
          </li>
          <li>
            <Link to="/dep">Departments</Link>
          </li>
          <li>
            <Link to="/payslip">Salary Slips</Link>
          </li>
        </ul>
        <Link to="/login" className="drawer-docs-btn">
          Login
        </Link>
      </div>
    </div>
  );
}

export default DrawerWithNavigation;
