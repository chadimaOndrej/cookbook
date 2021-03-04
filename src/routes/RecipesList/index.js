import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import RecipesList from '../../components/RecipesList';
import { Link } from 'react-router-dom';
import cookbook from '../../apis/cookbook';

const RecipeListRoute = () => { 
    const [recipes, setRecipes] = useState([]);
    
    useEffect( () => {
        search();
    }, []);

    const search = async () => {
        try{
            const {data} = await cookbook.get("/recipes");
            // console.log('data', data);
            setRecipes(data);
        }
        catch(error) {
            console.log(error);
            setRecipes(null);
            // alert(`Recepty nenalezeny!`);
        }
    };

    return (
       <>
            <Header>
                <span>Recepty</span>
                <Link to='/newrecipe'>+</Link>
            </Header>
            <div style={{maxWidth: 920,margin: '0 auto'}}>
                <RecipesList recipes={recipes} />
            </div>
        </>
    );
}

export default RecipeListRoute;