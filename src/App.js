import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './Components/Home/Home';
import {
  Routes, Route
} from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Admin routes temporarily disabled - they need Bootstrap to MUI migration */}
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
