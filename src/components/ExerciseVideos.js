import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{mt: {lg: '12rem', xs:'2rem'}}} p="2rem" ml="1.1rem">
      <Typography variant="h4" mb="3.3rem" fontWeight="700">
          Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack 
      justifyContent="flex-start" 
      alignItems="center"
      flexWrap="wrap" 
      sx={{
        flexDirection: {lg: 'row'},
        gap: {lg: '7rem', xs: '0'}
      }}>
        { exerciseVideos?.slice(0,6).map((item, index) => (
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#000" fontWeight="600">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#8c8c8c">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        )) }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos;
