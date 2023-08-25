import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import Logo from '../assets/images/Logo.png';

import SearchIcon from '@mui/icons-material/Search';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  const isMobile = useMediaQuery('(min-width:800px)');

  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: '7.625rem', sx: '2.5rem' },
        justifyContent: 'space-between',
        alignItems: 'center',
        my: { sm: '1rem', xs: '0.6rem' },
        px: '1.5625rem',
      }}
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '3rem', height: '3rem', margin: '0 1.25rem' }} />
      </Link>
      <Stack
        direction="row"
        gap="2.5rem"
        fontSize="1.3rem"
        alignItems="center"
        fontFamily={'"Roboto","Helvetica","Arial",sans-serif;'}
      >
        <Typography
          component="span"
          variant=""
          sx={{ '&:hover': { borderBottom: isMobile ? '0.1875rem solid #FF2625' : '' }, position: 'relative' }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: '#3A1212',
            }}
          >
            {isMobile ? 'Home' : <HomeIcon />}
          </Link>
        </Typography>

        <Typography
          component="span"
          variant=""
          sx={{ '&:hover': { borderBottom: isMobile ? '0.1875rem solid #FF2625' : '' } }}
        >
          <Link
            to="/#exercises"
            style={{
              textDecoration: 'none',
              color: '#3A1212',
            }}
          >
            {isMobile ? 'Exercises' : <FitnessCenterIcon />}
          </Link>
        </Typography>
        <Typography
          component="span"
          variant=""
          sx={{ '&:hover': { borderBottom: isMobile ? '0.1875rem solid #FF2625' : '' } }}
        >
          <Link
            to="/#search"
            style={{
              textDecoration: 'none',
              color: '#3A1212',
            }}
          >
            {isMobile ? 'Search' : <SearchIcon />}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
