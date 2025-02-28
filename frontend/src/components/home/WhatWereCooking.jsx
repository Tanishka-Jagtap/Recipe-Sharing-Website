import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import mockRecipes from '../../services/mockData';  

const WhatWereCooking = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Finding the recipe with the matching ID
    const selectedRecipe = mockRecipes.find((recipe) => recipe.id === id);

    if (selectedRecipe) {
      localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
      navigate(`/recipe/${id}`);
    } else {
      console.error(`Recipe with id ${id} not found`); 
    }
  };

  return (
    <Box sx={{ mb: 6, mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        WHAT WE'RE COOKING
      </Typography>
      <Grid container spacing={3}>
        {mockRecipes.map((recipe) => (  
          <Grid item xs={12} sm={6} md={3} key={recipe.id}>
            <Card
              sx={{ borderRadius: 2, overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => handleCardClick(recipe.id)}
            >
              <CardMedia
                component="img"
                height="200"
                image={recipe.photo}
                alt={recipe.name}
              />
              <CardContent>
                <Typography variant="h6">{recipe.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhatWereCooking;