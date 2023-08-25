import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff',
        borderBottomLeftRadius: '1.25rem',
        width: '16.875rem',
        height: '17.5rem',
        cursor: 'pointer',
        gap: '2.9rem',
        borderTop: bodyPart === item ? '0.25rem solid #ff2625' : '',
      }}
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: 'smooth',
        });
      }}
      >
      <img src={`icons/${item}.png`} alt={item} style={{ width: '3rem', height: '3rem' }} />
      <Typography sx={{ fontSize: '24px', fontWeight: 'bold', color: '#3A1212', textTransform: 'capitalize' }}>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
