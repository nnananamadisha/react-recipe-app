import React from 'react';
import CustomImage from './CustomImage';
import ChickenFeet from './ChickenFeet';
import Chakalaka from './Chakalaka';
import CarrotCake from './CarrotCake';

export default function RecipeCard({ recipe }) {
    const recipeComponents = {
        ChickenFeet: <ChickenFeet />,
        chakalaka: <Chakalaka />,
        carrotCake: <CarrotCake />,
        
    };

    const recipeComponent = recipeComponents[recipe.type] || null;

    return (
        <div className="recipe-card">
            <CustomImage ImgSrc={recipe.image} pt="65%" />
            {/* <div className="recipe-card-info"> */}
            <p className="recipe-title">{recipe.title}</p>
            <div className="recipe">
                <p className="recipe-desc">{recipe.description}</p>
            </div>
                
            {recipeComponent}
            
            <a className="view-btn" href="#!">Ingredients</a>
            <p className='recipe-list'>{recipe.ingredients}</p>
            {/* </div> */}
        </div>
    );
}
