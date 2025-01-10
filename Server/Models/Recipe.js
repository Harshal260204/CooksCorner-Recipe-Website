const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    steps: [{ type: String, required: true }],
    category: { type: String, required: true },  // e.g., 'Drinks', 'Desserts'
    image: { type: String, required: true },  // Image URL or file path
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isTopRecipe: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);
