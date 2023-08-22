import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImages from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: {xs: 'center', md: 'start'},
        gap: '1.3rem',
        mt: { lg: '13.25rem', xs: '4.375rem' },
        ml: { sm: '3.125rem' },
      }}
    >
      <Typography sx={{ color: '#FF2625', fontWeight: '600', fontSize: '1.625rem' }}>Fitness Club</Typography>
      <Typography sx={{ fontWeight: '700', fontSize: { lg: '2.75rem', xs: '2.5rem' } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography sx={{ fontSize: '1.44rem', lineHeight: '2.2rem' }}>Check out the most effective exercises</Typography>
      <Box>
        <Button variant="contained" color="error" sx={{ backgroundColor: '#ff2625' }}>
          Explore exercises
        </Button>
      </Box>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '12.5rem',
          color: '#ff2625',
          opacity: 0.1,
          display: { xs: 'none', lg: 'block' },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImages} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
