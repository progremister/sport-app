import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import {images} from '../assets';

const Footer = () => {
  return (
    <Box mt="4rem" bgColor="#fff3f4">
      <Stack gap="4rem" alignItems="center" px="4rem" pt="2.4rem">
        <img src={images.logo} alt="logo" width="100px" height="100px"/>
        <Typography variant="h5" pb="4rem" mt="2rem">
          Made by <a href="" className="referal">Dmytro Kolosovskyi</a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;
