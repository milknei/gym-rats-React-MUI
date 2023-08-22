import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: '1.3125rem',
            color: '#fff',
            background: '#FFA9A9',
            fontSize: '0.875rem',
            borderRadius: '1.25rem',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '1.3125rem',
            color: '#fff',
            background: '#FCC757',
            fontSize: '0.875rem',
            borderRadius: '1.25rem',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="1.3125rem"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: '1.5rem', xs: '1.25rem' } }}
        mt="0.6875rem"
        pb="0.625rem"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
