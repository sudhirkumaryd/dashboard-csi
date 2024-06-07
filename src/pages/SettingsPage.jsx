import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel, Paper } from '@mui/material';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    // Save settings logic here
    alert('Settings saved!');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
      </Paper>
      <Paper sx={{ padding: 3, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Preferences
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              name="darkMode"
              color="primary"
            />
          }
          label="Dark Mode"
        />
      </Paper>
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default Settings;
