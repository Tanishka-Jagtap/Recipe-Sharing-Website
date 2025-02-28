import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const pancakeImage = 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuY2FrZXxlbnwwfHwwfHx8MA%3D%3D';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: '#fff',
      }}
    >
      <Box
        sx={{
          flex: '0 1 50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            left: -50,
            width: '250px',
            height: '250px',
            background: '#EBC76B',
            transform: 'rotate(-10deg)',
            borderRadius: '0 0 80% 0',
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="xs" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography component="h1" variant="h4" sx={{ mb: 4, fontWeight: 600, textAlign: 'center' }}>
            LOGIN
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 4 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                mb: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
              sx={{
                mb: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 3,
                py: 1.5,
                backgroundColor: '#EBC76B',
                color: 'black',
                fontWeight: 600,
                borderRadius: '8px',
              }}
            >
              LOGIN
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Divider sx={{ flex: 1 }} />
              <Typography sx={{ px: 2, color: 'text.secondary' }}>or</Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
              <Button variant="outlined" sx={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}>
                <GoogleIcon />
              </Button>
              <Button variant="outlined" sx={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}>
                <FacebookIcon />
              </Button>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Link
                onClick={() => navigate('/register')}
                sx={{ cursor: 'pointer', color: 'text.primary', textDecoration: 'none' }}
              >
                Don't have an account? Sign up
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          flex: '0 1 50%',
          display: { xs: 'none', md: 'block' },
          backgroundImage: `url(${pancakeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'brightness(1.1)',
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
