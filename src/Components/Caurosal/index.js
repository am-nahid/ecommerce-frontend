import React, { useState, useEffect } from 'react';
import { Box, IconButton, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/14726826/pexels-photo-14726826.jpeg',
    'https://images.pexels.com/photos/17827708/pexels-photo-17827708/free-photo-of-ijsland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/14692666/pexels-photo-14692666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatic sliding every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
        onClick={handlePrevious}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
        onClick={handleNext}
      >
        <ArrowForwardIcon />
      </IconButton>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 400, // Set your desired height here
          overflow: 'hidden',
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: '100%',
              minWidth: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.3s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </Paper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bg: index === currentIndex ? 'primary.main' : 'grey',
              mx: 1,
              cursor: 'pointer',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
