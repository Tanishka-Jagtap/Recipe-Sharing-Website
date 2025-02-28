import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, Grid, Avatar, Paper, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Navigate, useNavigate } from 'react-router-dom';

// Sample data for the profile
const userProfile = {
    name: "Rhea",
    likes: 268,
    followers: 149,
    reviews: 32,
    bio: "Hi! I'm Rhea, a food blogger extraordinaire, capturing the essence of global flavors through tantalizing visuals and vivid storytelling. From city markets to hidden gems, Alex's blog is a culinary adventure that invites readers to indulge in the art of gastronomy. Savor the world one delicious post at a time!",
    recipesPosted: [
        { title: "Egg Sandwich", image: "https://plus.unsplash.com/premium_photo-1694630656689-13d76af27fbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGVnZyUyMHNhbmR3aWNofGVufDB8MHwwfHx8MA%3D%3D" },
        { title: "Watermelon Mojito", image: "https://media.istockphoto.com/id/545256768/photo/two-red-cocktail-with-ice-lime-and-mint.jpg?s=612x612&w=0&k=20&c=dsqYM-ZylSGa27HNx89KY1xVVJ6BSHF8xDkpogOuBE0=" },
        { title: "Pasta", image: "https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBhc3RhfGVufDB8fDB8fHww" },
    ],
    favourites: [
        { title: "Chicken Pasta", image: "https://media.istockphoto.com/id/1057464802/photo/penne-pasta-with-tomato-sauce-chicken-and-cheese-with-ingredients-and-a-place-for-text.jpg?s=612x612&w=0&k=20&c=44bkY4NCsNAY9AT5w9kRl1j_p7Heb7l5QoSAVSJOMDU=", rating: 4.5, chef: 'Thomas Deon' },
        { title: "Mexican Salad", image: "https://media.istockphoto.com/id/1057879242/photo/taco-with-chicken-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vm0zXnaHn6un0StaDnDFtp6jkiTWZ72bP9ss-IJHqP8=", rating: 4.0, chef: 'Peter Griffin' },
        { title: "Strawberry Ice-cream", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeSUyMGljZWNyZWFtfGVufDB8fDB8fHww", rating: 5.0, chef: 'Cinda' },
        { title: "Raspberry Pastry", image: "https://media.istockphoto.com/id/1405357696/photo/chocolate-cube-cake-sliced-brownie-cheesecake-with-fresh-raspberry.jpg?s=612x612&w=0&k=20&c=vAfB1360XsTIYnh_zfRgmnawK3DLW7HVw2UEpQxIZoA=", rating: 4.0, chef: 'jimly' },
    ],
};

// Styled components
const ProfileHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
}));

const RecipeCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: 'none',
    border: '2px solid #ddd'

}));

const FavouritesCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '8px',
    position: 'relative',
    boxShadow: 'none',
    border: '1px solid #ddd'
}));

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


const Profile = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState(new Set());
    const navigate = useNavigate();

    const toggleFavorite = (title) => {
        const newFavorites = new Set(favoriteRecipes);
        if(newFavorites.has(title)){
            newFavorites.delete(title);
        } else {
            newFavorites.add(title);
        }
        setFavoriteRecipes(newFavorites);
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: 15, marginBottom: 15 }}>
            <ProfileHeader>
                <Avatar
                    alt={userProfile.name}
                    src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1bnxlbnwwfHwwfHx8MA%3D%3D"
                    sx={{ width: 200, height: 200, marginRight: 2, border: '3px solid white' }}
                />
                <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', padding: '10px' }}>{userProfile.name}</Typography>
                    <Rating name="read-only" value={4} readOnly size="small" sx={{ paddingLeft: '10px' }} />
                    <Box sx={{ mt: 1, paddingLeft: '10px' }}>
                        <InstagramIcon sx={{ mr: 1, cursor: 'pointer', color: '#E4405F' }} />
                        <FacebookIcon sx={{ mr: 1, cursor: 'pointer', color: '#4267B2' }} />
                        <PinterestIcon sx={{ cursor: 'pointer', color: '#E60023' }} />
                    </Box>
                </Box>
                <Box sx={{ ml: 'auto' }}>
                    <Button variant="contained" color="warning" onClick={() => navigate('/edit-profile')}>
                        Edit Profile
                    </Button>
                </Box>
            </ProfileHeader>

            <Typography variant="body1" sx={{ marginBottom: 2, textAlign: 'justify', color: 'black', fontWeight: '20px', paddingTop: '10px', paddingBottom: '15px' }}>
                {userProfile.bio}
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={4} textAlign="center">
                    <Typography variant="h4" fontWeight="bold">{userProfile.likes}</Typography>
                    <Typography variant="subtitle2" color="black">Likes</Typography>
                </Grid>
                <Grid item xs={4} textAlign="center">
                    <Typography variant="h4" fontWeight="bold">{userProfile.followers}</Typography>
                    <Typography variant="subtitle2" color="black">Followers</Typography>
                </Grid>
                <Grid item xs={4} textAlign="center">
                    <Typography variant="h4" fontWeight="bold">{userProfile.reviews}</Typography>
                    <Typography variant="subtitle2" color="black">Reviews</Typography>
                </Grid>
            </Grid>

            <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 4, marginBottom: 2 }}>
                Recipes Posted
            </Typography>
            <Grid container spacing={2}>
                {userProfile.recipesPosted.map((recipe, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <RecipeCard>
                            <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: 200 }} />
                            <Typography variant="subtitle1" mt={1} fontWeight={'bold'}>{recipe.title}</Typography>
                        </RecipeCard>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 4, marginBottom: 2 }}>
                Favourites
            </Typography>
            <Grid container spacing={2}>
                {userProfile.favourites.map((favourite, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <FavouritesCard>
                            <FavouriteIcon
                              isFavorite = {favoriteRecipes.has(favourite.title)}
                              onClick={() => toggleFavorite(favourite.title)}
                            />
                            <img src={favourite.image} alt={favourite.title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: 200 }} />
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{favourite.title}</Typography>
                            <Typography variant="body1" sx={{ fontSize: '15px' }}>{favourite.chef}</Typography>
                            <Rating name="read-only" value={favourite.rating} readOnly size="small" sx={{ paddingLeft: '10px' }} />
                        </FavouritesCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Profile;