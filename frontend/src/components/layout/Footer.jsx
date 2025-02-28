import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              RECIPE BOOK
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Discover and share the best recipes from around the world.
              Join our community of food lovers!
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              QUICK LINKS
            </Typography>
            <Stack spacing={1}>
              <Link href="/about" color="inherit" underline="hover">About Us</Link>
              <Link href="#" color="inherit" underline="hover">Contact</Link>
              <Link href="#" color="inherit" underline="hover">Terms & Conditions</Link>
              <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            </Stack>
          </Grid>

          {/* Connect */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              CONNECT WITH US
            </Typography>
            <Box>
              <IconButton color="inherit">
                <Facebook />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <Instagram />
              </IconButton>
              <IconButton color="inherit">
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}
        >
          © {new Date().getFullYear()} Recipe Book. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
