const Recipe = require('../Models/Recipe');

// Fetch all recipes or filter by category
const getRecipes = async (req, res) => {
    try {
        const { category } = req.query;  // Get category filter from query params
        const filter = category ? { category } : {};  // Filter by category if provided

        const recipes = await Recipe.find(filter);
        res.json(recipes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Fetch a specific recipe by ID
const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        res.json(recipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Create a new recipe (admin only)
const createRecipe = async (req, res) => {
    const { title, description, ingredients, steps, category, image } = req.body;

    try {
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            steps,
            category,
            image,
            createdBy: req.user.id,  // Link to the logged-in user
        });

        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an existing recipe (admin only)
const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }  // Return updated recipe
        );

        if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(updatedRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a recipe (admin only)
const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

        if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createRecipe,
    getRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
};
