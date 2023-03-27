import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { images } from '../assets';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}}} 
    position="relative"
    p="2rem">
      <Typography 
      color="#ff2625"
      fontWeight="600"
      fontSize="2.6rem">
        Fitness Club
      </Typography>
      <Typography
      fontWeight="700"
      sx={{ 
        fontSize: {lg: "40px", xs: "40px"}}}
      mb="2.3rem" mt="3rem">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography 
      fontSize="22px"
      lineHeight="35px"
      mb="4px">
        Check out the most effective exercises
      </Typography>
      <Button 
      variant="contained"
      color="error"
      href="#exercises"
      sx={{ backgroundColor: "#ff2625", padding: "1rem"}}>
        Explore Exercises
      </Button>
       <Typography
       fontWeight="600"
       color="#ff2625"
       sx={{ 
        opacity: .1,
        display: {lg: 'block', xs: 'none'}
       }}
       fontSize="20rem"> 
        Exercise
       </Typography>
      <img src={images.banner } alt="Banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner;
