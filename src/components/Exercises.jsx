import React, { useEffect, useState, useRef } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import { useLocation, useNavigate } from 'react-router-dom';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [exercisesPerPage] = useState(9);
  const location = useLocation();
  const exercisesNode = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setIsLoading(true);
        let exercisesData = [];

        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        setExercises(exercisesData);
      } catch (error) {
        console.log(error);
        navigate('/error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.length > 0 ? exercises?.slice(indexOfFirstExercise, indexOfLastExercise) : [];

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location, exercisesNode]);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id="exercises" ref={exercisesNode} sx={{}} mt="3.125rem" p="1.25rem">
      {!currentExercises.length || isLoading ? (
        <Loader />
      ) : (
        <>
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { xs: '1.8rem', md: '2.8rem' },
              my: { xs: '1rem', lg: '3rem' },
            }}
          >
            Explore Even More
          </Typography>
          <Stack direction="row" sx={{ gap: { lg: '6.7rem', xs: '3.125rem' } }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} />
            ))}
          </Stack>
          <Stack sx={{ mt: { lg: '7.125rem', xs: '4.375rem' } }} alignItems="center">
            {exercises.length > 9 && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Exercises;
