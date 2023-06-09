import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import { images } from '../assets';

const Navbar = () => {
  return (
    <div>
      <Stack 
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {sm: '122px', xs: '40px'},
            mt: {sm: '32px', xs: '20px'},
            justifyContent: 'none'}} 
      px="2rem">
        <Link to="/">
          <img src={ images.logo } alt="logo" style={{ 
            width: '48px', height: '48px', margin: '0 2rem'}}/>
        </Link>
        <Stack 
        direction="row"
        gap="4rem"
        fontSize="2.4rem"
        alignitems="flex-end">
          <Link to="/" style={{ color: '#3a1212'}} className="navbar-menu">Home</Link>
          <a href="/#exercises" style={{ color: '#3a1212'}} className="navbar-menu">Exercises</a>
        </Stack>
      </Stack>
    </div>
  )
}

export default Navbar;
