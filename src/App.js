import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.scss';
import { Home, ExerciseDetail } from './pages';
import { Navbar, Footer } from './components';


const App = () => {
  return (
    <div>
      <Box width="400px" sx={{ width: {xl: '1488px' }}} m="auto">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/exercise/:id' element={<ExerciseDetail />}/>
        </Routes>
        <Footer />
      </Box>
    </div>
  )
}

export default App;
