import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Rating,
  Button,
  Container,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import mockRecipes from '../services/mockData';

// Styled Components for layout precision
const NutritionCircle = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  width: '70px',
  height: '70px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(198, 92, 20, 0.6)',
  marginBottom: theme.spacing(1),
}));

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  console.log(`Recipe ID from URL: ${id}`); // Log the ID from the URL

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);

      // Attempt to find the recipe in mock data
      const foundRecipe = mockRecipes.find((recipe) => recipe.id === id);

      if (foundRecipe) {
        console.log('Recipe found in mock data:', foundRecipe);
        setRecipe(foundRecipe);
      } else {
        console.log('Recipe not found in mock data for id:', id);
        setRecipe(null); // Set recipe to null to indicate it's not found
      }

      setLoading(false);
    };

    fetchRecipeDetails();
  }, [id]); // The useEffect runs when the 'id' changes

  if (loading) {
    return <Typography sx={{ mt: '150px', textAlign: 'center' }}>Loading...</Typography>;
  }

  if (!recipe) {
    return <Typography sx={{ mt: '150px', textAlign: 'center' }}>No recipe found</Typography>;
  }

  // Helper Function to convert a single string Procedure into Array
  const convertProcedureToArray = (procedureString) => {
    if (!procedureString) return []; // Handle null or undefined
    return procedureString.split('\n').filter((step) => step.trim() !== '');
  };

  // Procedure as array for mapping
  const procedureArray = convertProcedureToArray(recipe.procedure);

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 5, mt: 3, background: '#f8f9fa' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Grid container spacing={3}>
            {/* Title, Stats, and Nutrition on the left; Image on the right */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {recipe.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating name="recipe-rating" value={recipe.rating || 0} precision={0.5} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({recipe.numReviews || 0} reviews)
                </Typography>
              </Box>

              {/* Recipe Stats - Ingredients, Time, Calories - BELOW NAME*/}
              <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 2, pt: 5, pb: 5 }}>
                <Box textAlign="center">
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {recipe.ingredientsCount || 0}
                  </Typography>
                  <Typography variant="body2">Ingredients</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box textAlign="center">
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{recipe.cookingTime || 0}</Typography>
                  <Typography variant="body2">Minutes</Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box textAlign="center">
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{recipe.calorieCount || 0}</Typography>
                  <Typography variant="body2">Calories</Typography>
                </Box>
              </Box>

              {/* Nutrition Information */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '100px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Nutrition
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
                <NutritionCircle>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {recipe.nutrition?.protein || 'N/A'}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    Protein
                  </Typography>
                </NutritionCircle>
                <NutritionCircle>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {recipe.nutrition?.carbs || 'N/A'}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    Carbs
                  </Typography>
                </NutritionCircle>
                <NutritionCircle>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {recipe.nutrition?.fats || 'N/A'}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    Fats
                  </Typography>
                </NutritionCircle>
                <NutritionCircle>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {recipe.nutrition?.sugar || 'N/A'}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    Sugar
                  </Typography>
                </NutritionCircle>
                <NutritionCircle>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {recipe.nutrition?.fiber || 'N/A'}
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                    Fiber
                  </Typography>
                </NutritionCircle>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={6}>
              <img src={recipe.photo} alt={recipe.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Grid>

            {/* Ingredients */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '120px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Ingredients
              </Typography>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>
                    <Typography>{ingredient}</Typography>
                  </li>
                ))}
              </ul>
            </Grid>

            {/* Procedure */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '120px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Procedure
              </Typography>
              <ol>
                {procedureArray?.map((step, index) => (
                  <li key={index}>
                    <Typography>{step}</Typography>
                  </li>
                ))}
              </ol>
            </Grid>

            {/* Recipe Tags */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '150px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Recipe Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '25px' }}>
                {recipe.recipeTags?.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1, mb: 1, borderRadius: '16px', color: 'black', borderColor: 'black', fontWeight: 'bold' }}
                  >
                    {tag}
                  </Button>
                ))}
              </Box>
            </Grid>

            {/* Reviews */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '100px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                Reviews
              </Typography>
              <Box>
                {recipe.reviews?.map((review) => (
                  <Paper elevation={1} key={review.id} sx={{ p: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ mr: 1 }}>{review.name?.[0]}</Avatar>
                      <Typography variant="subtitle2">{review.name}</Typography>
                    </Box>
                    <Rating name={`review-rating-${review.id}`} value={review.rating || 0} readOnly precision={0.5} />
                    <Typography variant="body2">{review.comment}</Typography>
                  </Paper>
                ))}
                <Button variant="outlined" sx={{ fontWeight: 'bold', color: 'black' }}>
                  Add a Review
                </Button>
              </Box>
            </Grid>

            {/* You May Also Like */}
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  m: 2,
                  bgcolor: '#f0ad4e',
                  width: '200px',
                  height: '45%',
                  maxHeight: '32px',
                  textAlign: 'center',
                }}
              >
                You May Also Like
              </Typography>
              <Grid container spacing={2}>
                {recipe.relatedRecipes?.map((relatedRecipe) => (
                  <Grid item xs={6} sm={3} key={relatedRecipe.id}>
                    <Paper elevation={1} sx={{ p: 1 }}>
                      <img
                        src={relatedRecipe.imageUrl}
                        alt={relatedRecipe.name}
                        style={{ width: '100%', height: '150px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <Typography variant="subtitle2">{relatedRecipe.name}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={() => navigate('/recipes')}>
                Back to Recipes
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default RecipeDetails;