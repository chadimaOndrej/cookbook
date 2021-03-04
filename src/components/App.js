import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RecipeListRoute from '../routes/RecipesList';
import RecipeDetailRoute from '../routes/RecipeDetail'; 
import RecipeNewRoute from '../routes/RecipeNew'; 

const App = () => {
    return (
        <BrowserRouter> 
            <Route path="/" exact component={RecipeListRoute}/>
            <Route path="/newrecipe" exact component={RecipeNewRoute}/>
            <Route path="/:handle" exact component={RecipeDetailRoute}/>
        </BrowserRouter>
    ); 
}

export default App;
