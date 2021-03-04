import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import RecipeDetail from '../../components/RecipeDetail';
import Rating from '../../components/Ratings';
import cookbook from '../../apis/cookbook';
import { Link } from 'react-router-dom';

const RecipeDetailRoute = props => {
    const { handle } = props.match.params;
    const [recipe, setRecipe] = useState({});

    useEffect( () => {
        search();
    }, [])


    const search = async () => {
        try {
            const {data} = await cookbook.get(`/recipes/${handle}`);
            console.log('detail', data);
            setRecipe(data);
        }
        catch(error) {
            setRecipe(null);
            alert('Hledaný recept neexistuje.');
        }
    };

    return (
        <>
            <Header>
                <Link to='/'>&#8592;</Link>
                <Link to='/newrecipe'>+</Link>
            </Header>
            <RecipeDetail recipe={recipe} />
            <Rating rating={recipe.score} />
        </>
    );
}

export default RecipeDetailRoute;
