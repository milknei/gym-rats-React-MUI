import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100svw',
        height: '100svh',
        display: 'flex',
        flexDirection: 'column',
        gap: '5rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: '1rem',
      }}
    >
      <Typography variant="h5">
        This website uses public database that has limited free requests and it seems like they just ran out
      </Typography>
      <Typography variant="h5">Please, try again later</Typography>
      <Box>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          color="error"
          sx={{ backgroundColor: '#ff2625', mb: '8rem' }}
        >
          Go to Home Page
        </Button>
      </Box>
    </Box>
  );
};

export default Error;
