import React, { useState } from "react";
import "./Recipes.css";
import Recipe from "./Recipe";
import { MOCK } from "./Mock";

export function Recipes(props) {
  const [recipes, setRecipes] = useState(MOCK);
  //cosnt [delete, setDelete] = useState(MOCK);

  function deleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

 function updateRecipe(recipe){
     deleteRecipe(recipe.id);
     setRecipes(recipes.push(recipe));
 }

 function addRecipe(recipe){
     recipes.push(recipe);
     console.log('-------add------ '+recipes[recipes.length-1].name);
 }
  

  recipes.map((recipe) => console.log(recipe.name));
  return (
    <div className="Recipes">
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} delete={deleteRecipe} update={updateRecipe} add={addRecipe}/>
      ))}
    </div>
  );

  // {!editMode && !props.addMode?

  // }
}
export default Recipes;
