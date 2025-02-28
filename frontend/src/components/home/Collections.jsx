import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const collections = [
  {
    id: 1,
    title: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDF8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Brunch',
    image: 'https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1bmNofGVufDB8MHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'Lunch',
    image: 'https://images.unsplash.com/photo-1597131628347-c769fc631754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNwYWdocmV0dGl2ZXxlbnwwfDB8MHx8fDA%3D',
  },
  {
    id: 4,
    title: 'Snacks',
    image: 'https://images.unsplash.com/photo-1451218005305-c330255e8a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D',
  },
  {
    id: 5,
    title: 'Dinner',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHwwfDB8MHx8fHww',
  },
  {
    id: 6,
    title: 'Midnight Cravings',
    image: 'https://media.istockphoto.com/id/917691378/photo/ramen-noodles-with-duck-egg-and-pak-choi-cabbage.jpg?s=612x612&w=0&k=20&c=9WEtQw6feNGS2YoGPVWD3QAvza8mAacyx5s7cF8xH2c=',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  objectFit: 'cover',
  transition: 'transform .3s ease-in-out',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: -19,
  left: -5,
  width: '100%',
  background: 'transparent',
  color: 'white',
}));

const Collections = () => {
  return (
    <Box sx={{ padding: 2, marginTop: '50px' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        COLLECTIONS
      </Typography>
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {collections.map((collection) => (
          <Grid item key={collection.id}>
            <Box sx={{ width: '355px', margin: '0' }}> 
              <Link to={`/category/${collection.title}`} style={{ textDecoration: 'none' }}>
                <StyledCard>
                  <StyledCardMedia
                    component="img"
                    height="280"
                    image={collection.image}
                    alt={collection.title}
                  />
                  <StyledCardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{collection.title}</Typography>
                  </StyledCardContent>
                </StyledCard>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Link to="/collections" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" sx={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
            View More
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Collections;
