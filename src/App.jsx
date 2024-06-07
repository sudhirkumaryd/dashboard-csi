// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Dashboard from './pages/DashboardPage';
import Reports from './pages/Reports';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import Settings from './pages/SettingsPage';

const App = () => (
  <Router>
    <ThemeSwitcher>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: 240, padding: 16 }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </ThemeSwitcher>
  </Router>
);

export default App;
