import React, { useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exersices = ({ exercises, setExercises, bodyPart }) => {
  
  const [currentPage, setCurrentPage] = useState(1),
        exercisesPerPage = 6,
        indexOfLastExercise = currentPage * exercisesPerPage,
        indexOfFirstExercise = indexOfLastExercise - exercisesPerPage,
        currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart]);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({top: '1800', behavior: 'smooth'});
  }

  return (
    <Box id="exercises"
    sx={{mt: {lg: '11rem'}}}
    mt="5rem"
    p="2rem"
    >
      <Typography variant="h3" m=" 0 0 2.6rem 2.6rem">
        Showing Results
      </Typography>
      <Stack 
      direction="row"
      sx={{ gap: {lg: '1.1rem', xs: '5rem'}}}
      flexWrap="wrap"
      justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack />
      <Stack sx={{ mt: { lg: '8.4rem', xs: '7rem' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exersices;
