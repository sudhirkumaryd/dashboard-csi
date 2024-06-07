// src/components/ThemeSwitcher.js
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';
import { Button } from '@mui/material';

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={toggleTheme} variant="contained" color="primary">
        Toggle Theme
      </Button>
      {children}
    </ThemeProvider>
  );
};

export default ThemeSwitcher;
