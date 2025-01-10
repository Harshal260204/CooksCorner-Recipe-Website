import React, { useState } from 'react';
import '../Styles/Forms.css';

function CreateRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: '',
    category: '',
    image: '',
    isTopRecipe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!formData.steps) newErrors.steps = 'Steps are required.';
    if (!formData.category) newErrors.category = 'Category is required.';
    if (!formData.image) newErrors.image = 'Image URL is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3000/recipes/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            ingredients: formData.ingredients.split(',').map((item) => item.trim()),
            steps: formData.steps.split('.').map((item) => item.trim()),
          }),
        });

        if (response.ok) {
          alert('Recipe created successfully!');
          setFormData({
            title: '',
            description: '',
            ingredients: '',
            steps: '',
            category: '',
            image: '',
            isTopRecipe: false,
          });
        } else {
          alert('Error creating recipe. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%', borderRadius: '20px' }}>
        <h3 className="text-center mb-4" style={{ color: '#6A1E55', fontWeight: 'bold' }}>Create Recipe</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              id="title"
              name="title"
              placeholder="Enter recipe title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className={`form-control ${errors.description ? 'is-invalid' : ''}`}
              id="description"
              name="description"
              placeholder="Enter recipe description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="ingredients" className="form-label">Ingredients</label>
            <textarea
              className={`form-control ${errors.ingredients ? 'is-invalid' : ''}`}
              id="ingredients"
              name="ingredients"
              placeholder="Enter ingredients (comma-separated)"
              value={formData.ingredients}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="steps" className="form-label">Steps</label>
            <textarea
              className={`form-control ${errors.steps ? 'is-invalid' : ''}`}
              id="steps"
              name="steps"
              placeholder="Enter steps (separate each step with a period)"
              value={formData.steps}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className={`form-control ${errors.category ? 'is-invalid' : ''}`}
              id="category"
              name="category"
              placeholder="Enter recipe category (e.g., Drinks, Desserts)"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="url"
              className={`form-control ${errors.image ? 'is-invalid' : ''}`}
              id="image"
              name="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isTopRecipe"
              name="isTopRecipe"
              checked={formData.isTopRecipe}
              onChange={handleChange}
            />
            <label htmlFor="isTopRecipe" className="form-check-label">Mark as Top Recipe</label>
          </div>
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#6A1E55', color: 'white' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
