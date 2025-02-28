const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
  ingredientsCount: { type: Number },
  cookingTime: { type: Number },
  calorieCount: { type: Number },
  nutrition: {
    protein: { type: String },
    carbs: { type: String },
    fats: { type: String },
    sugar: { type: String },
    fiber: { type: String },
  },
  ingredients: [{ type: String }],
  procedure: { type: String },
  recipeTags: [{ type: String }],
  rating: { type: Number },
  numReviews: { type: Number },
  reviews: [
    {
      id: { type: Number },
      name: { type: String },
      rating: { type: Number },
      comment: { type: String },
    },
  ],
  relatedRecipes: [
    {
      id: { type: Number },
      name: { type: String },
      imageUrl: { type: String },
    },
  ],
  category: { type: String }, 
}, {
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
