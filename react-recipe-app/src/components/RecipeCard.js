import React from 'react';
import CustomImage from './CustomImage';

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage ImgSrc={recipe.image} pt="65%" />
            {/* <div className="recipe-card-info"> */}
            <p className="recipe-title">{recipe.title}</p>
            <div className="recipe">
                <p className="recipe-desc">{recipe.description}</p>
            </div>
                
            <a className="view-btn" href="#!">Ingredients</a>
            <p className='recipe-list'>{recipe.ingredients}</p>
            {/* </div> */}
        </div>
    );
}
