import React from 'react';
import RatingStar from '../../ui/Stars';
import { RecipeCardStyled, RecipeCardImage, RecipeCardContent, RecipeCardName, RecipeCardDuration } from './recipeCard-styled';

const RecipeCard = ({recipeData, key}) => {

    return (
        <RecipeCardStyled key={key} to={`recipe?id=${recipeData.id}`}>
            <RecipeCardImage src={recipeData.avatar_url} title={recipeData.name} />

            <RecipeCardContent>
                <RecipeCardName>
                    {recipeData.name}
                </RecipeCardName>

                <RatingStar rating={recipeData.score} small={true} full={false} color='#ff00ff' />
                
                <RecipeCardDuration>
                    {recipeData.duration} min.
                </RecipeCardDuration>

            </RecipeCardContent>
        </RecipeCardStyled> 
    );
}

export default RecipeCard;