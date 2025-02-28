import mockRecipes from './mockData'; 

export const getRecipeById = async (id) => {
  // Finding the recipe with the matching ID
  const selectedRecipe = mockRecipes.find((recipe) => recipe.id === id);
  //Later api fetching logic will be adding

  return selectedRecipe || null; 
};