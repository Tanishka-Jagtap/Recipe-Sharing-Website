import React from 'react';
import { Box, Typography, Grid, Avatar, styled } from '@mui/material';

const recipes = [
  {
    id: 1,
    title: "Quick & Easy",
    image: 'https://media.istockphoto.com/id/1013286272/photo/cereal-muesli-and-sliced-bananas-strawberries-berries-chopped-almonds-and-walnuts-with-milk.jpg?s=612x612&w=0&k=20&c=nlaQZyjkA50zMd8FfuTe30Yx4_B5JDSysAiTkjn2Bs4=',
  },
  {
    id: 2,
    title: 'Healthy',
    image: 'https://media.istockphoto.com/id/2158961205/photo/avocado-toast.jpg?s=612x612&w=0&k=20&c=3_eerVr1ktopfBAFxfhQC6goGfoWWLYlc21AaBLbLxM=',
  },
  {
    id: 3,
    title: 'BBQ',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJicXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    title: 'Desserts',
    image: 'https://media.istockphoto.com/id/1253629945/photo/mousse-desserts-on-a-gray-concrete-background.jpg?s=612x612&w=0&k=20&c=RMQQn6lO0pS8geepkCdFDaYUUSGgXVsTpHyQa286A_g=',
  },
  {
    id: 5,
    title: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D',
  },
];

// Styled Avatar with hover effect
const HoverableAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  margin: '0 auto',
  marginBottom: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
  },
}));

const MoreRecipes = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        MORE RECIPES
      </Typography>
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid item xs={4} sm={2.4} key={recipe.id}>
            <Box sx={{ textAlign: 'center' }}>
              <HoverableAvatar
                src={recipe.image}
                alt={recipe.title} 
              />
              <Typography variant="subtitle1">{recipe.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreRecipes;