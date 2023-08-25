import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import HeroBannerImages from '../assets/images/banner.png';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const bannerMin = useMediaQuery('(min-width:715px)');
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        pt: { lg: '5rem', xs: '4.375rem' },
        px: { xs: '.5rem' },
        pl: { sm: '3.125rem' },
        pb: '2rem',
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', sm: 'start' },
          textAlign: { xs: 'center', sm: 'left' },
          zIndex: 5,
        }}
      >
        <Typography sx={{ color: '#FF2625', fontWeight: '600', fontSize: '2rem', mb: '2rem' }}>GYM RATS</Typography>
        <Typography sx={{ fontWeight: '700', mb: '2rem', fontSize: { lg: '2.75rem', xs: '2.5rem' } }}>
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography
          sx={{
            fontSize: '1.44rem',
            lineHeight: '2.2rem',
            mb: '2rem',
            width: '100%',
            maxWidth: { sm: '15rem', md: '100%' },
          }}
        >
          Check out the most effective exercises
        </Typography>
        <Box>
          <Button
            variant="contained"
            onClick={() => navigate('/#exercises')}
            color="error"
            sx={{ backgroundColor: '#ff2625', mb: '8rem' }}
          >
            Explore exercises
          </Button>
        </Box>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '8rem',
            lineHeight: '7rem',
            color: '#ff2625',
            opacity: 0.1,
            display: { xs: 'none', lg: 'block' },
            zIndex: 0,
          }}
        >
          Find
          <br />
          your style
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: 'auto' },
          height: '100%',
          aspectRatio: { sm: '3 / 4' },
          position: 'absolute',
          right: '0',
          top: '0',

          borderBottomLeftRadius: '3rem',

          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            height: '100%',
            aspectRatio: { sm: '3 / 4' },
            position: 'absolute',
            right: '0',
            top: '0',
            backgroundImage: `url(${HeroBannerImages})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottomLeftRadius: '3rem',
            opacity: bannerMin ? '1' : '0.1',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
