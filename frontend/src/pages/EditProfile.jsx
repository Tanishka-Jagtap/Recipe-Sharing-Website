import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// Sample data for the profile
const initialProfileData = {
  name: "Rhea",
  bio: "Hi! I'm Rhea, a food blogger extraordinaire, capturing the essence of global flavors through tantalizing visuals and vivid storytelling.",
  profilePicture: "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1bnxlbnwwfHwwfHx8MA%3D%3D", // Replacing with actual profile picture URL later
};

const EditProfile = () => {
  const [profileData, setProfileData] = useState(initialProfileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handliing form submission logic later
    console.log('Profile updated:', profileData);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 15, marginBottom: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          alt={profileData.name}
          src={profileData.profilePicture}
          sx={{ width: 200, height: 200, margin: '0 auto' }}
        />
        <Typography variant="h4" sx={{ mt: 2 }}>{profileData.name}</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Bio"
          name="bio"
          value={profileData.bio}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Profile Picture URL"
          name="profilePicture"
          value={profileData.profilePicture}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default EditProfile;