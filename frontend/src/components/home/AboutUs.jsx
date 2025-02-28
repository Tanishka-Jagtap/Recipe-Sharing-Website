import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        ABOUT US
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Our recipe cookbook is a treasure trove of delicious recipes from around the world. 
        Join our community to share recipes and cooking tips!
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ mb: 3 }}
      >
        <Button variant="contained" color="primary">
          App Store
        </Button>
        <Button variant="contained" color="primary">
          Google Play
        </Button>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          LEARN MORE
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="body2">Blog</Typography>
          <Typography variant="body2">FAQ</Typography>
          <Typography variant="body2">Help</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutUs;
