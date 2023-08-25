import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box component="footer" mt="5rem">
    <Stack sx={{ alignItems: 'center', gap: '1rem' }} flexWrap="wrap" px="2.5rem" py="1.5rem">
      <img src={Logo} alt="logo" style={{ width: '5rem', height: '5rem' }} />
      <Typography component="h3" sx={{ fontSize: '1.5rem' }}>
        GYM RATS
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
