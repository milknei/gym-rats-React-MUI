import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchExercises);
    }
  };

  return (
    <Stack sx={{ alignItems: 'center', justifyContent: 'center', mt: '2.3rem', p: '1.25rem' }}>
      <Typography
        sx={{ fontWeight: '700', fontSize: { lg: '2.75rem', xs: '1.9rem' }, mb: '3.1rem', textAlign: 'center' }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box sx={{ position: 'relative', mb: '4.5rem' }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises..."
          type="text"
          height="4rem"
          sx={{
            input: { fontWeight: '700', border: 'none', outline: 'none', borderRadius: '0.25rem' },
            outline: 'none',
            width: { lg: '40rem', xs: '21.875rem' },
            backgroundColor: 'transparent',
            pr: { lg: '10.3rem', sm: '5.2rem' },
            borderRadius: '2.5rem',
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '10rem', sm: '5rem' },
            fontSize: { lg: '1.25rem', xs: '0.875rem' },
            height: '3.5rem',
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}></HorizontalScrollbar>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
