import React from 'react';
import { Box, Typography, InputBase, IconButton, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate('/create-recipe'); 
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
        backgroundImage: 'url("https://images.unsplash.com/photo-1555813456-94a3dd418cd3?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 12, md: 16 },
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          px: 3,
          mb: 4,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '25px',
            width: '100%',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <InputBase
            placeholder="search for recipies..."
            sx={{
              width: '100%',
              padding: '10px 20px',
              fontSize: '1rem',
              color: 'white',
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.8)',
                opacity: 1,
              },
            }}
          />
          <IconButton
            type="button"
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              p: 1,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Add Recipe Button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          display: 'flex',        
          flexDirection: 'column', 
          alignItems: 'flex-start', 
        }}
      >
        <Button
          variant="contained"
          color="warning"          
          sx={{
            bgcolor: '#f0ad4e',      
            color: 'black',
            '&:hover': {
              bgcolor: '#e09b39', 
            },
            borderRadius: '8px',   
            fontWeight: 'bold',
            padding: '8px 16px',
            marginLeft: '100px',
            marginBottom: '100px',
            width: '50%',
            maxWidth: '200px'
          }}
          onClick={handleAddRecipeClick} 
        >
          Click here to add a recipe
        </Button>
         <Typography
          variant="body2"
          sx={{
            color: 'white',
            fontSize: '0.75rem',
            textAlign: 'left',
            mb:0,
          }}
        >
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroBanner;