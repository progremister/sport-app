import React, {useState} from 'react';
import { Box } from '@mui/material';

import { HeroBanner, SearchExercises, Exercises } from '../components';

const Home = () => {

  const [exercises, setExercises] = useState('all');
  const [bodyPart, setBodyPart] = useState([]);

  return (
    <Box>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home;
