import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    IconButton,
    Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadButton = styled(Button)({
    backgroundColor: '#5B7FFF',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#5B7FFF',
    },
});

const CreateRecipe = () => {
    const [formData, setFormData] = useState({
        recipeName: '',
        ingredients: '',
        procedure: '',
        calorieCount: '',
        nutritionValues: '',
        recipeTags: '',
    });
    const [selectedImages, setSelectedImages] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + selectedImages.length > 5) {
            alert('You can upload a maximum of 5 images.');
            return;
        }
        const newImages = files.map((file) => ({
            file: file,
            preview: URL.createObjectURL(file),
        }));
        setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...selectedImages];
        URL.revokeObjectURL(updatedImages[index].preview); // Revoke the URL
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 15, mb: 1 }}>
            <Paper elevation={3} sx={{ p: 4, width: '90%', maxWidth: '1200px' }}>
                <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                    Create Your Delicious Recipe
                </Typography>

                {/* Image Upload Section */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                        Recipe Photos (up to 5)
                    </Typography>
                    <Box
                        sx={{
                            border: '1px dashed grey',
                            p: 2,
                            textAlign: 'center',
                            position: 'relative',
                            minHeight: '250px',
                            display: 'flex',
                            flexDirection: 'column', // Stack items vertically
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {selectedImages.length > 0 ? (
                            <Grid container spacing={2} justifyContent="center">
                                {selectedImages.map((image, index) => (
                                    <Grid item key={index}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Avatar
                                                src={image.preview}
                                                alt={`Uploaded Image ${index + 1}`}
                                                sx={{ width: 80, height: 80 }}
                                            />
                                            <IconButton
                                                aria-label="delete"
                                                size="small"
                                                sx={{ position: 'absolute', top: -10, right: -10, backgroundColor: 'white' }}
                                                onClick={() => handleRemoveImage(index)}
                                            >
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                ))}
                                {selectedImages.length < 5 && (
                                    <Grid item>
                                        <label htmlFor="image-upload">
                                            <input
                                                accept="image/*"
                                                id="image-upload"
                                                multiple
                                                type="file"
                                                style={{ display: 'none' }}
                                                onChange={handleImageUpload}
                                            />
                                            <Box
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    border: '1px dashed grey',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <AddPhotoAlternateIcon color="action" />
                                            </Box>
                                        </label>
                                    </Grid>
                                )}
                            </Grid>
                        ) : (
                            <>
                                <UploadButton variant="contained" component="label">
                                    Upload Photos
                                    <input hidden accept="image/*" multiple type="file" onChange={handleImageUpload} />
                                </UploadButton>
                                <Typography variant="body2" color="textSecondary" margin="3px">
                                    or drag and drop up to 5 photos
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>

                {/* Recipe Name */}
                <TextField
                    fullWidth
                    label="Recipe Name"
                    name="recipeName"
                    value={formData.recipeName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    placeholder="What do you call your recipe?"
                    variant="outlined"
                    size="small"
                />

                {/* Ingredients */}
                <TextField
                    fullWidth
                    multiline
                    rows={9}
                    label="Ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    placeholder="List your ingredients"
                    variant="outlined"
                    size="small"
                />

                {/* Procedure */}
                <TextField
                    fullWidth
                    multiline
                    rows={9}
                    label="Procedure"
                    name="procedure"
                    value={formData.procedure}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    placeholder="How do you make your recipe?"
                    variant="outlined"
                    size="small"
                />

                {/* Calorie Count */}
                <TextField
                    fullWidth
                    label="Calorie Count"
                    name="calorieCount"
                    value={formData.calorieCount}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    placeholder="What's your calorie count?"
                    variant="outlined"
                    size="small"
                />

                {/* Nutrition Values */}
                <TextField
                    fullWidth
                    multiline
                    rows={7}
                    label="Nutrition Values"
                    name="nutritionValues"
                    value={formData.nutritionValues}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                    placeholder="List your nutrition values"
                    variant="outlined"
                    size="small"
                />

                {/* Recipe Tags  - needs styling to match the + button, and the input*/}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TextField
                        label="Recipe Tags"
                        name="recipeTags"
                        value={formData.recipeTags}
                        onChange={handleChange}
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1, flexGrow: 1 }}
                        placeholder="Add tags"
                    />
                    <Button variant="outlined" color="primary" sx={{ minWidth: 'auto', p: 1, borderRadius: '50%' }}>
                        +
                    </Button>
                </Box>

                {/* Post Recipe Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                            backgroundColor: '#f0ad4e',
                            color: 'black',
                            '&:hover': { backgroundColor: '#e09b39' },
                            width: '30%',
                            fontSize: '20px',
                            fontWeight: '20px',
                            maxWidth: '200px',
                        }}
                    >
                        Post Recipe
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default CreateRecipe;