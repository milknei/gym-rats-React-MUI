import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '12.6875rem', xs: '1.25rem' } }} p="1.25rem">
      <Typography sx={{ fontSize: { lg: '2.75rem', xs: '1.5625rem' } }} fontWeight={700} color="#000" mb="2.0625rem">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { md: 'row' }, gap: { md: '6.875rem', xs: '0rem' } }}
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '1.25rem' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '1.5rem', xs: '1rem' } }} fontWeight={400} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="0.875rem" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
