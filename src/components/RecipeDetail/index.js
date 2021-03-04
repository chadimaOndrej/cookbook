import React from 'react';
import RatingStar from '../../ui/Stars';
import { RecipeDetailSubTitle, 
    RecipeDetailStyle, 
    RecipeDetailTitle, 
    RecipeDetailInfoBanner, 
    RecipeDetailDuration, 
    RecipeDetailContent 
} from './recipeDetail-styled';

const RecipeDetail = ({recipe}) => {
    const ingredients = recipe.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    });


    return (
        <RecipeDetailStyle>  
            <div>
                <RecipeDetailTitle>{recipe.name}</RecipeDetailTitle>
            </div>
            <RecipeDetailInfoBanner>
                <div>
                    <RatingStar rating={recipe.score} full={false} />
                </div>

                <RecipeDetailDuration>
                    {recipe.duration} min.
                </RecipeDetailDuration>
            </RecipeDetailInfoBanner>

            <RecipeDetailContent>
                <p>{recipe.info}</p>
                <RecipeDetailSubTitle>Ingredience</RecipeDetailSubTitle>
                <ul>
                    {ingredients}
                </ul>

                <RecipeDetailSubTitle>Příprava jídla</RecipeDetailSubTitle>
                <p>{recipe.description}</p>
            </RecipeDetailContent>
        </RecipeDetailStyle>
    );
}

export default RecipeDetail;