import React, { useState, useEffect } from "react";
import "./Recipes.css";
import Recipe from "./Recipe";
import { MOCK } from "./Mock";
import useAxios from "axios-hooks";
import { Button } from "reactstrap";



export const baseUrl = "http://10.0.1.156:8080/api/v1";



export function Recipes(props) {
  const [{data, loading, error}] = useAxios("http://10.0.1.156:8080/api/v1/recipes");
  const [{data:dataAdd}, executeAdd]=useAxios(
    {
      url:'http://10.0.1.156:8080/api/v1/recipes',
      method:"POST"
    },
    {manual:true}

  );
  const [{data:dataEdit}, executeEdit]=useAxios(
    {
      url:'http://10.0.1.156:8080/api/v1/recipes',
      method:"PUT"
    },
    {manual:true}

  );

  const [{data:dataDelete}, executeDelete]=useAxios(
    {
      url:`${baseUrl}/recipes/`,
      method:"DELETE"
    },
    {manual:true}

  );



  
  
  const [recipes, setRecipes] = useState(data||MOCK);
  const [addMode, setAddMode] = useState(false);
  const [editMode, setEditMode] = useState(false);


  useEffect(()=>setRecipes(data),[data, dataAdd, dataEdit]);
  
  function deleteRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

 function updateRecipe(recipe){
     executeEdit({data:recipe});
     console.log(recipe)
     
 }

 function addRecipe(recipe){

     recipes.push(recipe);
     executeAdd({data: {...recipe, instructions:[], ingredients: []}});
     setAddMode(false);
    
 }
  return (
    <div className="Recipes">
      {recipes && recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe}  addMode={addMode} editMode={editMode} delete={deleteRecipe} update={updateRecipe} add={addRecipe}/>
      ))}
      {addMode==false?
       <Button onClick={()=>{setAddMode(true);setEditMode(false)}} outline color="success">Add</Button>
       :
       <Recipe key={recipes.length} recipe={{}}  delete={deleteRecipe} update={updateRecipe} addMode={addMode} add={addRecipe} editMode={editMode} futureId={recipes.length}/>
     
      }
    </div>



  );
}
export default Recipes;
