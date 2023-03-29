import React, {useState, useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart,setBodyPart }) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack 
    alignItems="center"
    mt="37px"
    justifyContent="center"
    textAlign="center"
    p="2rem">
      <Typography
      fontWeight="700" sx={{ fontSize: 
      {lg: '4.4rem', xs: '3rem'}}}
      mb="5rem">
        Awesome Exercises <br/>You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { 
            fontWeight: '700', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '1.4rem'
            },
            width: { 
              lg: '1050px', 
              xs: '350px' 
            }, 
            backgroundColor: '#fff', 
            borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ 
          bgcolor: '#FF2625', 
          color: '#fff', 
          textTransform: 'none', 
          width: { lg: '173px', xs: '80px' }, 
          height: '53px', 
          position: 'absolute', 
          right: '0', 
          fontSize: { lg: '2rem', xs: '1.4rem' } }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box
        sx={{ position: 'relative', width: '100%', p: '2rem'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises;
