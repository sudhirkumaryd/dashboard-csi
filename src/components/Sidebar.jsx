// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, TableChart, CalendarToday, ViewKanban, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon><Home /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/reports">
        <ListItemIcon><TableChart /></ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemIcon><CalendarToday /></ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemIcon><ViewKanban /></ListItemIcon>
        <ListItemText primary="Kanban Board" />
      </ListItem>
      <ListItem button component={Link} to="/settings">
        <ListItemIcon><Settings /></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
