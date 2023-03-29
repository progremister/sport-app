import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
      <Stack direction="row">
        <Button sx={{ 
            ml: '2.1rem', 
            color: '#fff', 
            background: '#ffa9a9', 
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            borderRadius: '20px'
        }}>{exercise.bodyPart}</Button>
        <Button sx={{ 
            ml: '2.1rem', 
            color: '#fff', 
            background: '#fcc757', 
            fontSize: '1.4rem',
            textTransform: 'capitalize',
            borderRadius: '20px'
        }}>{exercise.target}</Button>
      </Stack>
      <Typography ml="2.2rem" color="#000" fontSize="1.6rem" fontWeight="700" mt="1.1rem" pb="1rem" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard;
