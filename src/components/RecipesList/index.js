import React from 'react';
import RecipeCard from '../RecipeCard';
import {RecipesListStyled} from './recipesList-styled';

const RecipesList = ({recipes}) => {
    const renderRecipiesList = recipes.map((item, index) => {
        return <RecipeCard recipeData={item} key={index} />
    });

    return (
        <RecipesListStyled>
            {renderRecipiesList}
        </RecipesListStyled>
    );
}

export default RecipesList;
