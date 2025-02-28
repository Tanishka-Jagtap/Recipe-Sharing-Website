import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Rating, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import mockRecipes from '../services/mockData';

const FavouriteIcon = styled(({isFavorite, ...props}) => (isFavorite ? <Favorite {...props}/> : <FavoriteBorderIcon {...props}/>))(({ theme }) => ({
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'red',
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '4px',
    fontSize: '1.2rem',
}));

const StyledCard = styled(Card)({
  borderRadius: 10,
  overflow: 'hidden',
  position: 'relative',
  transition: 'transform 0.3s, box-shadow 0.3s',
  width: '350px',       
  height: '350px',      
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  },
});

const StyledCardMedia = styled(CardMedia)({
  objectFit: 'cover',
  width: '100%',
  height: '250px',
});

const StyledCardContent = styled(CardContent)({
  padding: '8px', 
});

const CategoryPage = () => {
    const { title } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
      if (title) {
        const filteredRecipes = mockRecipes.filter((recipe) => recipe.category && recipe.category.toLowerCase() === title.toLowerCase());
        setRecipes(filteredRecipes);
        const initialFavorites = {};
          filteredRecipes.forEach(recipe => {
          initialFavorites[recipe.id] = recipe.isFavorite || false;
        });
        setFavorites(initialFavorites);
      }
    }, [title]);
   
    const toggleFavorite = (recipeId) => {
      setFavorites(prevFavorites => ({
        ...prevFavorites,
        [recipeId]: !prevFavorites[recipeId],
      }));
    };

  return (
    <Box sx={{ padding: 2, marginTop: '100px', paddingBottom: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        {title} Recipes
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid item xs={4} sm={6} md={4} lg={3} key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  image={recipe.photo}
                  alt={recipe.name}
                />
                  <IconButton aria-label="add to favorites" sx={{ position: 'absolute', top: 5, right: 5, color: favorites[recipe.id] ? 'red' : 'white' }} onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(recipe.id);
                  }}>
                    {favorites[recipe.id] ? <Favorite sx={{ fontSize: '1.2rem'}}/> : <FavoriteBorderIcon sx={{ fontSize: '1.2rem'}} />}
                  </IconButton>
                <StyledCardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{recipe.name}</Typography>
                   <Rating name="read-only" value={recipe.rating} readOnly precision={0.5} size="small" />
                </StyledCardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryPage;