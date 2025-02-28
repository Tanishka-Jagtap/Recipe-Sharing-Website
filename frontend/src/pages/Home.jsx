import React from 'react';
import { Box, Container } from '@mui/material';
import HeroBanner from '../components/home/HeroBanner';
import WhatWereCooking from '../components/home/WhatWereCooking';
import MoreRecipes from '../components/home/MoreRecipes';
import Collections from '../components/home/Collections';
import Navbar from '../components/layout/Navbar';

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <HeroBanner />
      <Container maxWidth="lg">
        <WhatWereCooking />
        <MoreRecipes />
        <Collections />
      </Container>
    </Box>
  );
};

export default Home;