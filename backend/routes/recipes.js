const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');  

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        console.log('GET all recipes: Successfully retrieved recipes.');
        res.json(recipes);
    } catch (err) {
        console.error('GET all recipes: Error retrieving recipes:', err.message);
        res.status(500).json({ message: err.message });
    }
});

// GET a specific recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            console.log(`GET recipe by ID ${req.params.id}: Recipe not found.`);
            return res.status(404).json({ message: 'Recipe not found' });
        }
        console.log(`GET recipe by ID ${req.params.id}: Successfully retrieved recipe.`);
        res.json(recipe);
    } catch (err) {
        console.error(`GET recipe by ID ${req.params.id}: Error retrieving recipe:`, err.message);
        res.status(500).json({ message: err.message });
    }
});

// POST a new recipe
router.post('/', async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        photo: req.body.photo,
        ingredientsCount: req.body.ingredientsCount,
        cookingTime: req.body.cookingTime,
        calorieCount: req.body.calorieCount,
        nutrition: req.body.nutrition,
        ingredients: req.body.ingredients,
        procedure: req.body.procedure,
        recipeTags: req.body.recipeTags,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        reviews: req.body.reviews,
        relatedRecipes: req.body.relatedRecipes,
        category: req.body.category, 
    });

    try {
        const newRecipe = await recipe.save();
        console.log(`POST new recipe: Successfully created recipe with ID ${newRecipe._id}.`);
        res.status(201).json(newRecipe);
    } catch (err) {
        console.error('POST new recipe: Error creating recipe:', err.message);
        res.status(400).json({ message: err.message });
    }
});

// PUT (Update) an existing recipe
router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            console.log(`PUT recipe ${req.params.id}: Recipe not found, unable to update.`);
            return res.status(404).json({ message: 'Recipe not found' });
        }

        // Update only the fields that are present in the request body
        if (req.body.name != null) {
            recipe.name = req.body.name;
        }
        if (req.body.photo != null) {
            recipe.photo = req.body.photo;
        }
        if (req.body.ingredientsCount != null) {
            recipe.ingredientsCount = req.body.ingredientsCount;
        }
        if (req.body.cookingTime != null) {
            recipe.cookingTime = req.body.cookingTime;
        }
        if (req.body.calorieCount != null) {
            recipe.calorieCount = req.body.calorieCount;
        }
        if (req.body.nutrition != null) {
            recipe.nutrition = req.body.nutrition;
        }
        if (req.body.ingredients != null) {
            recipe.ingredients = req.body.ingredients;
        }
        if (req.body.procedure != null) {
            recipe.procedure = req.body.procedure;
        }
        if (req.body.recipeTags != null) {
            recipe.recipeTags = req.body.recipeTags;
        }
        if (req.body.rating != null) {
            recipe.rating = req.body.rating;
        }
        if (req.body.numReviews != null) {
            recipe.numReviews = req.body.numReviews;
        }
        if (req.body.reviews != null) {
            recipe.reviews = req.body.reviews;
        }
        if (req.body.relatedRecipes != null) {
            recipe.relatedRecipes = req.body.relatedRecipes;
        }
        if (req.body.category != null) {
            recipe.category = req.body.category;
        }

        const updatedRecipe = await recipe.save();
        console.log(`PUT recipe ${req.params.id}: Successfully updated recipe.`);
        res.json(updatedRecipe);
    } catch (error) {
        console.error(`PUT recipe ${req.params.id}: Error updating recipe:`, error.message);  
        res.status(500).json({ message: error.message });
    }
});

// DELETE a recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            console.log(`DELETE recipe ${req.params.id}: Cannot find recipe, unable to delete.`);
            return res.status(404).json({ message: 'Cannot find recipe' });
        }
        await recipe.deleteOne();
        console.log(`DELETE recipe ${req.params.id}: Successfully deleted recipe.`);
        res.json({ message: 'Deleted Recipe' });
    } catch (err) {
        console.error(`DELETE recipe ${req.params.id}: Error deleting recipe:`, err.message);
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
