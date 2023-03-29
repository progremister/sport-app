import React, { useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exersices = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id="exercises"
    sx={{mt: {lg: '11rem'}}}
    mt="5rem"
    p="2rem"
    >
      <Typography variant="h3" mb="4.6rem">
        Showing Results
      </Typography>
      <Stack 
      direction="row"
      sx={{ gap: {lg: '1.1rem', xs: '5rem'}}}
      flexWrap="wrap"
      justifyContent="center">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
    </Box>
  )
}

export default Exersices;
