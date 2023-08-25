import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Error from './pages/Error';

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      {pathname !== '/error' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      {pathname !== '/error' && <Footer />}
    </Box>
  );
};

export default App;
