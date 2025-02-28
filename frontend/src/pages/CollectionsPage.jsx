import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, AppBar, Toolbar, IconButton, InputBase, alpha, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; 

// Sample data
const categories = [
  { id: 1, title: 'Breakfast', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDF8MHx8fDA%3D' },
  { id: 2, title: 'Brunch', image: 'https://images.unsplash.com/photo-1611601184963-9d1de9b79ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1bmNofGVufDB8MHwwfHx8MA%3D%3D' },
  { id: 3, title: 'Lunch', image: 'https://images.unsplash.com/photo-1597131628347-c769fc631754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNwYWdocmV0dGl2ZXxlbnwwfDB8MHx8fDA%3D' },
  { id: 4, title: 'Snacks', image: 'https://images.unsplash.com/photo-1451218005305-c330255e8a4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNuYWNrc3xlbnwwfDB8MHx8fDA%3D' },
  { id: 5, title: 'Dinner', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHwwfDB8fHww' },
  { id: 6, title: 'Midnight Cravings', image: 'https://media.istockphoto.com/id/917691378/photo/ramen-noodles-with-duck-egg-and-pak-choi-cabbage.jpg?s=612x612&w=0&k=20&c=9WEtQw6feNGS2YoGPVWD3QAvza8mAacyx5s7cF8xH2c=' },
  { id: 7, title: 'Vegetrain', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhcmlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D'},
  { id: 8, title: 'Non-Vegetrain', image: 'https://media.istockphoto.com/id/1265209311/photo/fried-chicken-kebab-or-kabab.jpg?s=612x612&w=0&k=20&c=cq6fgpRnjpiD3ILifT3bPg2m8EnxtUvG7M8oB-9h1MY='},
];

// Styled Search Bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const CollectionsPage = () => {
  return (
    <Box>
      {/* Category Grid */}
      <Box sx={{ padding: 2, marginTop: '100px' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
          All Categories
          <Typography variant='h6' sx={{ mb: 4, textAlign: 'center', mt: 2 }}>
            Browse through different categories and discover something new today!
          </Typography>
        </Typography>
        <Grid container spacing={5} sx={{ px: 12 }}>
          {categories.map((category) => (
            <Grid item xs={6} sm={4} md={3} key={category.id}> 
              <RouterLink to={`/category/${category.title}`} style={{ textDecoration: 'none' }}>
                <Card 
                  sx={{ 
                    borderRadius: 4, 
                    overflow: 'hidden', 
                    position: 'relative', 
                    width: '320px', 
                    margin: '0 auto', 
                    transition: 'transform 0.3s, box-shadow 0.3s', 
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={category.image}
                    alt={category.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: 0,
                    width: '100%',
                    color: 'white',
                    bgcolor: 'transparent', 
                    p: 1,  
                  }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{category.title}</Typography>
                  </CardContent>
                </Card>
              </RouterLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CollectionsPage;