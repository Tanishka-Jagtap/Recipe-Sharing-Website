import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const About = () => {
  return (
    <Box
      sx={{
        pt: { xs: 10, md: 12 },
        pb: 8,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        minHeight: '100vh',
        animation: 'fadeIn 0.5s ease-in forwards',
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 8,
            fontWeight: 'bold',
            color: '#1a1a1a',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          About Us
        </Typography>

        {/* Welcome Section */}
        <Paper
          elevation={2}
          sx={{
            mb: 6,
            p: 4,
            borderRadius: 4,
            background: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ 
              mb: 3, 
              color: '#EBC76B',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <RestaurantIcon sx={{ fontSize: 40, color: '#EBC76B' }} />
            Welcome to RecipeNest!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ffffff' }}>
            We are passionate about bringing food lovers together to share and discover amazing recipes from around the world.
          </Typography>
        </Paper>

        {/* Mission Section */}
        <Paper
          elevation={2}
          sx={{
            mb: 6,
            p: 4,
            borderRadius: 4,
            background: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              mb: 3, 
              color: '#EBC76B',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <GroupsIcon sx={{ fontSize: 35, color: '#EBC76B' }} />
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ffffff' }}>
            Our goal is to create a community where home cooks, food enthusiasts, and professional chefs can connect, inspire, and enjoy cooking.
          </Typography>
        </Paper>

        {/* What We Offer Section */}
        <Paper
          elevation={2}
          sx={{
            mb: 6,
            p: 4,
            borderRadius: 4,
            background: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              mb: 3, 
              color: '#EBC76B',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <MenuBookIcon sx={{ fontSize: 35, color: '#EBC76B' }} />
            What We Offer
          </Typography>
          <List sx={{ pl: 2 }}>
            {[
              'A diverse collection of recipes for every occasion.',
              'Step-by-step guides to help you cook delicious meals.',
              'A platform to share your own recipes with the world.',
              'Engaging discussions, tips, and tricks for all levels of cooking.',
            ].map((item, index) => (
              <ListItem 
                key={index}
                sx={{
                  py: 1.5,
                  px: 0,
                  borderBottom: index !== 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}
              >
                <ListItemText 
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    color: '#ffffff',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Join Us Section */}
        <Paper
          elevation={2}
          sx={{
            mb: 6,
            p: 4,
            borderRadius: 4,
            background: '#1a1a1a',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{ 
              mb: 3, 
              color: '#EBC76B',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 35, color: '#EBC76B' }} />
            Join Us!
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#ffffff',
            }}
          >
            Sign up, explore, and start your culinary journey with us. Whether you are a beginner or an expert, there's something for everyone.
          </Typography>
        </Paper>

        {/* Footer */}
        <Box 
          component="footer"
          sx={{
            mt: 8,
            pt: 3,
            borderTop: '1px solid rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#6c757d' }}>
            © {new Date().getFullYear()} RecipeNest. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
