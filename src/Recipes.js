import React from 'react'
import style from './recipes.module.css';
import Typography from '@material-ui/core/Typography';

const Recipes = (props) => {
    return (
        <div className={style.recipe}>
            <Typography variant="h6">
                {props.title}
            </Typography>
            <img className={style.image} src={props.image} alt=""/>
            <ol>
               <p className={style.p}>Cal {props.calories}</p>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
                
            </ol>
            
        </div>
    )
}
export default Recipes;
