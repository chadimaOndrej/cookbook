import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
// import cookbook from '../../apis/cookbook';

const RecipeNewRoute = () => {

    return (
        <>
            <Header>
                <Link to='/'>&#8592;</Link>
                Přidat recept
                <Link to='/newrecipe'>+</Link>
            </Header>
            Add new recipe.
        </>
    );
}

export default RecipeNewRoute;