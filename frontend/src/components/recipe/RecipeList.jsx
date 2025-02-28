import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    Button,
    Checkbox,
    FormControlLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Rating,
    IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const FavouriteIcon = styled(({isFavorite, ...props}) => (isFavorite ? <Favorite {...props}/> : <FavoriteBorderIcon {...props}/>))(({ theme }) => ({
    position: 'absolute',
    top: '15px', 
    right: '15px',
    color: 'red', 
    backgroundColor: 'white',
    borderRadius: '50%', 
    padding: '4px',    
    fontSize: '2rem',  
}));

// Sample data for recipes
const recipes = [
    {
        id: 1,
        title: 'Chicken Pasta',
        image: 'https://media.istockphoto.com/id/1057464802/photo/penne-pasta-with-tomato-sauce-chicken-and-cheese-with-ingredients-and-a-place-for-text.jpg?s=612x612&w=0&k=20&c=44bkY4NCsNAY9AT5w9kRl1j_p7Heb7l5QoSAVSJOMDU=',
        rating: 4.5,
        isFavorite: false,
    },
    {
        id: 5,
        title: 'Raspberry Pastry',
        image: 'https://media.istockphoto.com/id/1405357696/photo/chocolate-cube-cake-sliced-brownie-cheesecake-with-fresh-raspberry.jpg?s=612x612&w=0&k=20&c=vAfB1360XsTIYnh_zfRgmnawK3DLW7HVw2UEpQxIZoA=',
        rating: 4.0,
        isFavorite: false,
    },
    {
        id: 6,
        title: 'Bread Omelette',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
        rating: 4.8,
        isFavorite: false,
    },
    {
        id: 7,
        title: 'Spinach Farfalle',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpbmFjaCUyMHBhc3RhfGVufDB8fDB8fHww',
        rating: 4.2,
        isFavorite: false,
    },
    {
        id: 8,
        title: 'Strawberry Ice-cream',
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeSUyMGljZWNyZWFtfGVufDB8fDB8fHww',
        rating: 5.0,
        isFavorite: false,
    },
    {
        id: 9,
        title: 'Spicy Meat Balls',
        image: 'https://media.istockphoto.com/id/626752258/photo/albondigas-meatballs-with-tomato-sauce-on-a-plate-close-up.jpg?s=612x612&w=0&k=20&c=4n2y-oqAFcR9JAb4bLj2bGWzD6GMb7p4qY8q9VBnxxw=',
        rating: 4.3,
        isFavorite: false,
    },
    {
        id: 10,
        title: 'Chicken Beet Burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBiZWF0JTIwYnVyZ2VyfGVufDB8fDB8fHww',
        rating: 4.1,
        isFavorite: false,
    },
    {
        id: 11,
        title: 'Orange Mojito',
        image: 'https://media.istockphoto.com/id/1434445775/photo/mocktail-mango-ice-tea-drinking-glass-high-resolution-stock-photo.jpg?s=612x612&w=0&k=20&c=71ZZG2JWpeAnnkkVd-O4_uJOOLwE-s17-ER6gy_gtvY=',
        rating: 4.6,
        isFavorite: false,
    },
    {
        id: 12,
        title: 'Strawberry Pancakes',
        image: 'https://media.istockphoto.com/id/975988956/photo/homemade-pancakes-with-berries-and-banana.jpg?s=612x612&w=0&k=20&c=UNa26yySfeD0fkwmkIqi2xseuheP-W9tVcmg3CD5ezQ=',
        rating: 4.9,
        isFavorite: false,
    },
    {
        id: 13,
        title: 'Raspberry Ice-cream',
        image: 'https://media.istockphoto.com/id/545807974/photo/homemade-raspberry-ice-cream.jpg?s=612x612&w=0&k=20&c=5JLYHLNEfciFj3htCczwCjT5t3hc_MUviULLN1hiu-o=',
        rating: 4.4,
        isFavorite: false,
    },
    {
        id: 14,
        title: 'Fish Lime Curry',
        image: 'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?s=612x612&w=0&k=20&c=ChDQJpRhCd7vCaoKOMC9QHNkHBeTOXrl4mUKdXrbCik=',
        rating: 4.7,
        isFavorite: false,
    },
    {
        id: 15,
        title: 'Cheese Sandwich',
        image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D',
        rating: 4.0,
        isFavorite: false,
    },
    {
        id: 16,
        title: 'Strawberry Pudding',
        image: 'https://media.istockphoto.com/id/1298293237/photo/homemade-strawberry-mousse.jpg?s=612x612&w=0&k=20&c=gvo6M1uLNJDtMyARnkR8VKWkz5tzCtUqivg6KZbOZEQ=',
        rating: 4.2,
        isFavorite: false,
    },
    {
        id: 17,
        title: 'Shrimp Ramen',
        image: 'https://media.istockphoto.com/id/656435488/photo/asian-soup-with-noodles-and-shrimps-prawns.jpg?s=612x612&w=0&k=20&c=XiX8ogDNwYuqziFhplJ2iKF6QFrQ8adf_7Ecn-lHxgs=',
        rating: 4.5,
        isFavorite: false,
    },
    {
        id: 18,
        title: 'Minced Spaghetti',
        image: 'https://media.istockphoto.com/id/1087833940/photo/traditional-pasta-spaghetti-bolognese-in-white-plate-on-wooden-table-background.jpg?s=612x612&w=0&k=20&c=uY_H8oWzidO1RyyLKIbVfAU5AWvRhGXDcnyXKkv6Wa4=',
        rating: 4.8,
        isFavorite: false,
    },
    {
        id: 19,
        title: 'Basil Soup',
        image: 'https://media.istockphoto.com/id/1296225496/photo/tomato-basil-soup-on-a-rustic-table.jpg?s=612x612&w=0&k=20&c=ndVG0PRDFe8ydADIfRqe6rl38VWZFKjpjpY7FMKVNfs=',
        rating: 4.1,
        isFavorite: false,
    },
    {
        id: 20,
        title: 'Stuffed Avocado',
        image: 'https://media.istockphoto.com/id/923014414/photo/lobster-stuffed-avocado.jpg?s=612x612&w=0&k=20&c=tuSLcWsTHwVaY02CeD03fqOGaGY-ptlgY_VWuYWTLi8=',
        rating: 4.6,
        isFavorite: false,
    },
    {
        id: 21,
        title: 'Tomato Soup',
        image: 'https://media.istockphoto.com/id/925638744/photo/tomato-soup-in-a-bowl.jpg?s=612x612&w=0&k=20&c=_9vWD9D7mREGW0pf7hlVjat3G7LvkOP2lYQz9Bk2oyk=',
        rating: 4.3,
        isFavorite: false,
    },
    {
        id: 22,
        title: 'Chocolate Shake',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hvY29sYXRlJTIwc2hha2V8ZW58MHx8MHx8fDA%3D',
        rating: 4.9,
        isFavorite: false,
    },
    {
        id: 23,
        title: 'Blueberry Waffles',
        image: 'https://media.istockphoto.com/id/178841365/photo/pancakes-with-blueberries.jpg?s=612x612&w=0&k=20&c=oC4CV3HgM0_piiyt2py2dgYddpX5pm382Cu0XITxiZg=',
        rating: 4.2,
        isFavorite: false,
    },
    {
        id: 24,
        title: 'Red Velvet Muffins',
        image: 'https://media.istockphoto.com/id/508413098/photo/red-velvet-cupcakes-on-parchment.jpg?s=612x612&w=0&k=20&c=kp735KUtqTYymbAVwqKXHOPRVOBZEA78tymyFev7uKs=',
        rating: 4.4,
        isFavorite: false,
    },
    {
        id: 25,
        title: 'Crispy Wings',
        image: 'https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA=',
        rating: 4.7,
        isFavorite: false,
    },
    {
        id: 26,
        title: 'Chocolate Donuts',
        image: 'https://media.istockphoto.com/id/1211186709/photo/chocolate-doughnut-with-sprinkles.jpg?s=612x612&w=0&k=20&c=9PvpbdHfqlwx_BfPxJOW5bkqDapH1JQs64K5tjIrryY=',
        rating: 4.0,
        isFavorite: false,
    },
    {
        id: 27,
        title: 'Orange Mocktail',
        image: 'https://media.istockphoto.com/id/1386753518/photo/blood-orange-margarita-cocktail-with-ice-and-thyme.jpg?s=612x612&w=0&k=20&c=o3P8HBsD20aMS-kCuC9T_g4ThT4R2bJRkcuVJOFkuK4=',
        rating: 4.3,
        isFavorite: false,
    },
    // More recipes
];

const RecipesList = () => {
    const [expanded, setExpanded] = useState(false);
    const [favorites, setFavorites] = useState(recipes);
    const navigate = useNavigate();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) =>
            prevFavorites.map((recipe) =>
                recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
            )
        );
    };

    const handleRecipeClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    const filterOptions = [
        {
            title: 'Cuisine',
            options: ['Italian', 'Mexican', 'Chinese', 'Indian', 'Korean', 'Mediterranean', 'American', 'Continental'],
        },
        {
            title: 'Dietary Preference',
            options: ['Vegetarian', 'Non-Veg', 'Vegan', 'Gluten-Free', 'Keto', 'Low-Carb'],
        },
        {
            title: 'Meal Type',
            options: ['Breakfast', 'Lunch', 'Snacks', 'Appetizers', 'Soups', 'Dinner', 'Desserts'],
        },
        {
            title: 'Difficulty Level',
            options: ['Easy', 'Intermediate', 'Hard'],
        },
        {
            title: 'Cooking Time',
            options: ['Quick (Under 30 mins)', 'Moderate (30-60 mins)', 'Long (Over 60 mins)'],
        },
        {
            title: 'Allergies',
            options: ['Nuts', 'Dairy', 'Soy', 'Shellfish', 'Other'],
        },
        {
            title: 'Special Diets',
            options: ['Diabetic-Friendly', 'Weight Loss', 'Heart-Friendly'],
        },
    ];

    const paginationNumbers = [1, 2, 3, 4, 5];

    return (
        <Box sx={{ padding: 2, display: 'flex', marginTop: '100px', flexDirection: 'column', alignItems: 'center' }}>

           {/* Title */}
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', paddingBottom: '20px'}}>
                All Recipes
            </Typography>

            <Box sx={{display: 'flex', width: '100%'}}>
              {/* Filters Section */}
              <Box sx={{ width: 300, mr: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                      Filters
                  </Typography>
                  {filterOptions.map((filter, index) => (
                      <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
                              <Typography sx={{ fontWeight: 'bold' }}>{filter.title}</Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{ width: '300px' }}>
                              {filter.options.map((option) => (
                                  <FormControlLabel key={option} control={<Checkbox />} label={option} sx={{ ml: 0 }} />
                              ))}
                          </AccordionDetails>
                      </Accordion>
                  ))}
              </Box>

              {/* Recipes Grid */}
              <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={3}>
                      {favorites.map((recipe) => (
                          <Grid item xs={6} sm={4} md={3} key={recipe.id}>
                              <Card 
                                  sx={{ 
                                      borderRadius: 2, 
                                      position: 'relative', 
                                      transition: 'transform 0.3s, box-shadow 0.3s',
                                      '&:hover': {
                                          transform: 'scale(1.05)',
                                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                      },
                                  }}
                                  onClick={() => handleRecipeClick(recipe.id)}
                              >
                                  <CardMedia component="img" height="300" width="200" image={recipe.image} alt={recipe.title} sx={{ objectFit: 'cover', width: '100%' }} />
                                  <IconButton aria-label="add to favorites" sx={{ position: 'absolute', top: 5, right: 5, color: recipe.isFavorite ? 'red' : 'white' }} onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFavorite(recipe.id);
                                  }}>
                                      {recipe.isFavorite ? <Favorite /> : <FavoriteBorderIcon />}
                                  </IconButton>
                                  <Box sx={{ padding: 1 }}>
                                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{recipe.title}</Typography>
                                      <Rating name="read-only" value={recipe.rating} readOnly precision={0.5} size="small" />
                                  </Box>
                              </Card>
                          </Grid>
                      ))}
                  </Grid>

                  {/* Pagination */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, alignItems: 'center' }}>
                      {paginationNumbers.map((number) => (
                          <Button key={number} variant="text" sx={{ fontWeight: 'bold', color: 'black', minWidth: 'auto', px: 1 }}>
                              {number}
                          </Button>
                      ))}
                      <Button variant="text" sx={{ fontWeight: 'bold', color: 'black', minWidth: 'auto', px: 1 }}>
                          Next {'>'}
                      </Button>
                  </Box>
              </Box>
            </Box>
        </Box>
    );
};

export default RecipesList;
