import React, {useEffect, useState} from 'react';
import Recipes from  './Recipes';
import './App.css';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import Typography from '@material-ui/core/Typography';

const App = () => {

const APP_ID = '448d6bba';

const APP_KEY = '7a53acd82163de231074b10e37d9a094';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken')

useEffect (  () => {
getRecipes();

},[query]);

const getRecipes = async ()=>{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data = await response.json();
setRecipes(data.hits)
console.log(data.hits)
}

const updateSearch = e =>{
setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
return(
<div className="App">
    <Typography variant="h3" align="center" color="primary">
        Welcome to the recipes
    </Typography>
    <Typography variant="h6" align="center" color="primary">
        Choose the food you want, it can be lunches, breakfasts, desserts ... What you imagine
    </Typography>
    <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} 
               onChange={updateSearch}/>
        <Button className="search-button" variant="contained" color="primary" type="submit">search</Button>
    </form>
    <div className="recipes">
        {recipes.map(recipe =>
        (<Recipes key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
                ))}
    </div>
    <Footer/>
</div>
)
}
export default App;
