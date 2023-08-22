import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: '7.625rem', sx: '2.5rem' },
        justifyContent: 'none',
        mt: { sm: '2rem', xs: '1.25rem' },
        px: '1.5625rem',
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '3rem', height: '3rem', margin: '0 1.25rem' }} />
      </Link>
      <Stack direction="row" gap="2.5rem" fontSize="1.5rem" alignItems="flex-end">
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '0.1875rem solid #FF2625' }}>
          Home
        </Link>
        <a href="#/exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
