import React from "react";
import '../Styles/TopRecipes.css'

import chickenBiryani from '../Images/biryani.jpg';
import paneerTikkaMasala from '../Images/paneertikkamasala.jpg';
import chickenPasta from '../Images/chicken Pasta.jpg';
import shahiPaneer from '../Images/shahipaneer.jpg';
import chickenCrispy from '../Images/chickencrispy.jpg';
import paneerBiryani from '../Images/paneerbiryani.jpg';
import choleMasala from '../Images/chole.jpg';
import gulabjamun from '../Images/gulabjamun.jpg'

// import {useDispatch} from 'react-redux';
// import { addToSaved } from "../Redux/Slice";

export default function RecipeCard() {

//   const dispatch = useDispatch()

//   const sendData = (recipe)=>{
//       dispatch(addToSaved(recipe))
//   }

  const topRecipes = [
    {
      id: 1,
      name: "Chicken Tikka Biryani",
      description: "A fragrant, spiced biryani with marinated chicken tikka pieces, layered with basmati rice.",
      img: chickenBiryani,
      detailedRecipe: `
        1. Marinate chicken pieces with yogurt, red chili powder, turmeric, garam masala, and lemon juice. Let it sit for 2 hours.
        2. Grill or cook the marinated chicken until it's slightly charred and set aside.
        3. In a large pot, cook basmati rice with whole spices (bay leaf, cinnamon, cardamom) until 70% done, then drain.
        4. In the same pot, layer the rice with the chicken tikka pieces, fried onions, mint, and saffron milk.
        5. Cover and cook on low heat for 20-30 minutes. Serve hot with raita.
      `,
      type: "Non-Veg"
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      description: "A creamy and flavorful curry made with marinated paneer pieces cooked in a spiced tomato-based sauce.",
      img: paneerTikkaMasala,
      detailedRecipe: `
        1. Marinate paneer cubes in yogurt, red chili powder, turmeric, garam masala, and lemon juice. Let it rest for 1 hour.
        2. Grill or sauté the paneer until slightly charred and set aside.
        3. In a pan, heat oil, add onions, ginger-garlic paste, and sauté until golden brown.
        4. Add tomato puree, spices (coriander powder, cumin powder, garam masala), and cook until oil separates.
        5. Add cream, grilled paneer, and cook for a few more minutes. Garnish with coriander and serve with naan or rice.
      `,
      type: "Veg"
    },
    {
      id: 3,
      name: "Chicken White Sauce Pasta",
      description: "A creamy, rich pasta dish with grilled chicken, cooked in a garlic-flavored white sauce.",
      img: chickenPasta,
      detailedRecipe: `
        1. Season chicken pieces with salt, pepper, and Italian herbs. Grill or sauté until fully cooked, then set aside.
        2. In a pan, melt butter, add garlic, and cook until fragrant.
        3. Add flour, stir well, then gradually add milk, stirring continuously to avoid lumps.
        4. Once thickened, add grated cheese, season with salt, pepper, and Italian herbs.
        5. Add cooked pasta and grilled chicken to the sauce, stir well, and serve hot with a sprinkle of parmesan.
      `,
      type: "Non-Veg"
    },
    {
      id: 4,
      name: "Shahi Paneer",
      description: "A royal and creamy paneer curry made with rich ingredients like cream, cashews, and aromatic spices.",
      img: shahiPaneer,
      detailedRecipe: `
        1. Soak cashews in warm water, then blend into a smooth paste.
        2. In a pan, heat oil, add onions, ginger-garlic paste, and sauté until golden.
        3. Add tomato puree and cook until oil separates. Then add cashew paste and cook for a few more minutes.
        4. Add cream, garam masala, and paneer cubes. Simmer until the paneer absorbs the flavors.
        5. Garnish with a few saffron strands and serve with naan or pulao.
      `,
      type: "Veg"
    },
    {
      id: 5,
      name: "Chicken Crispy",
      description: "A popular appetizer made with crispy fried chicken coated in a spicy, tangy sauce.",
      img: chickenCrispy,
      detailedRecipe: `
        1. Marinate chicken strips with soy sauce, garlic paste, salt, and cornflour. Let it sit for 15 minutes.
        2. Deep fry the marinated chicken until crispy and golden. Set aside.
        3. In a pan, heat oil, add chopped garlic, green chilies, and onions. Sauté until fragrant.
        4. Add capsicum, soy sauce, chili sauce, and vinegar. Toss the fried chicken in the sauce.
        5. Garnish with spring onions and serve hot as an appetizer.
      `,
      type: "Non-Veg"
    },
    {
      id: 6,
      name: "Paneer Biryani",
      description: "A delightful, layered biryani made with marinated paneer and aromatic basmati rice, perfect for vegetarians.",
      img: paneerBiryani,
      detailedRecipe: `
        1. Marinate paneer cubes with yogurt, red chili powder, turmeric, garam masala, and lemon juice. Let it rest for 30 minutes.
        2. In a pot, cook basmati rice with whole spices (bay leaf, cinnamon, cardamom) until 70% done, then drain.
        3. In a pan, sauté marinated paneer until slightly golden and set aside.
        4. Layer rice, paneer, fried onions, mint, and saffron milk in a pot.
        5. Cover and cook on low heat for 20 minutes. Serve with raita or curry.
      `,
      type: "Veg"
    },
    {
      id: 7,
      name: "Chole Masala",
      description: "A spicy, flavorful North Indian chickpea curry, packed with robust spices and perfect with rice or naan.",
      img: choleMasala,
      detailedRecipe: `
        1. Soak chickpeas overnight, then pressure cook until soft.
        2. In a pan, heat oil and add cumin seeds, bay leaf, and chopped onions. Sauté until golden.
        3. Add ginger-garlic paste, chopped tomatoes, and cook until tomatoes are soft.
        4. Add turmeric, red chili powder, garam masala, and salt. Cook the masala until oil separates.
        5. Add boiled chickpeas and simmer for 10-15 minutes. Garnish with coriander leaves and serve hot.
      `,
      type: "Veg"
    },
    {
      id: 8,
      name: "Gulab Jamun",
      description: "A popular Indian dessert made of soft, round, deep-fried balls soaked in sweet, aromatic sugar syrup.",
      img: gulabjamun,
      detailedRecipe: `
        1. In a bowl, mix khoya (mawa), all-purpose flour, and baking powder to form a soft dough. Divide into small, smooth balls.
        2. In a pot, heat oil or ghee on low heat and fry the balls until golden brown. Set aside.
        3. Prepare sugar syrup by boiling water with sugar, cardamom, and a few saffron strands for 5-7 minutes.
        4. Add the fried balls to the warm syrup and let them soak for 1-2 hours.
        5. Serve warm or at room temperature.
      `,
      type: "Dessert"
    }
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
  {topRecipes.map((recipe, index) => (
    <div
      className="card m-3"
      style={{
        width: "18rem",
        border: "none",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      key={recipe.id}
    >
      <img
        src={recipe.img}
        className="card-img-top"
        alt={recipe.name}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div
        className="card-body"
        style={{
          padding: "1.2rem",
          backgroundColor: "#F9D9E1", // Lighter shade for Top Recipes
          color: "#2b2d42", // Dark color from footer for consistency
        }}
      >
        <h5 className="RecipeName" style={{ fontSize: "1.1rem", fontWeight: "600", color: "#6A4C93" }}>
          {recipe.name} {/* Changed the color here */}
        </h5>
        <h6 className="RecipeType" style={{ fontSize: "1rem", color: "#A98AC0", marginBottom: "10px" }}>
          {recipe.type}
        </h6>
        <p
          className="card-text"
          style={{
            fontSize: "14px",
            color: "#2b2d42",
            height: "60px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {recipe.description}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <a
            href="#"
            className="btn"
            style={{
              backgroundColor: "#D1A9F7", // Lighter shade for Navbar color
              color: "#fff",
              borderRadius: "25px",
              padding: "0.5rem 1.2rem",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            View Recipe
          </a>
          <a
            href="#"
            className="btn"
            style={{
              backgroundColor: "#F8E1D7", // Lighter shade for Categories color
              color: "#2b2d42",
              borderRadius: "25px",
              padding: "0.5rem 1.2rem",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
            onClick={() => {
              sendData(recipe);
            }}
          >
            Save Recipe
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}