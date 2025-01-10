const express = require('express');
const router = express.Router();
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const { verifyToken, adminOnly } = require('../Middlewere/Auth_middlewere');

// Fetch all recipes or filter by category
router.get('/', getRecipes);

// Fetch a specific recipe by ID
router.get('/:id', getRecipeById);

// Create a new recipe (admin only)
router.post('/', verifyToken, adminOnly, createRecipe);

// Update an existing recipe (admin only)
router.put('/:id', verifyToken, adminOnly, updateRecipe);

// Delete a recipe (admin only)
router.delete('/:id', verifyToken, adminOnly, deleteRecipe);

module.exports = router;
