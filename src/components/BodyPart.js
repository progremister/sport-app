import React from 'react';
import { Stack, Typography } from '@mui/material';

import { images } from '../assets';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            background: '#fff',
            borderRadius: '0 0 20px 20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '4.7rem'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: '1800', behavior: 'smooth'});
        }}>
      <img src={images.gym} alt="dumbbell" style={{ width: '40px', height: '40px'}}/>
      <Typography
      fontSize="2.4rem"
      fontWeight="700"
      color="#3a1212"
      textTransform="capitalize"
      >{item}</Typography>
    </Stack>
  )
}

export default BodyPart;
