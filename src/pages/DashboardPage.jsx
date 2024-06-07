// src/pages/Dashboard.js
import React from 'react';
import TableComponent from '../components/Table';
import ChartComponent from '../components/Chart';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <ChartComponent />
    <TableComponent />
  </div>
);

export default Dashboard;
