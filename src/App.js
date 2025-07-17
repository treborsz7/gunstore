import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Admin from './Components/Admin/Admin'
import {
  Routes, Route
} from "react-router-dom"



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route path='/admin/*' element={<Admin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
