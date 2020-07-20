import React, { useState } from "react";
import "./Recipe.css";
import { ListGroup, ListGroupItem, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";


import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Badge,
  Button,
  ButtonGroup
} from "reactstrap";
import Recipes from "./Recipes";

export function Recipe(props) {
  const [recipe, setRecipe ]= useState(props.recipe);
 
  
 
  
  const [editMode, setEditMode ]= useState(props.editMode);
  const [addMode, setAddMode ]= useState(props.addMode);
  {console.log("add   -"+addMode)}
  {console.log("edit   -"+editMode)}
  const {id, name, picture, description} = recipe;
  //const {Iname, quantity, unit}=recipe.ingredients
  //const [addIngredient, setAddIngredient ]= useState();
  let image = picture;
  const [display, setDisplay ]= useState(true);
  
  
  
  return (
    <div className="Recipe">
     
      {editMode==false && addMode==false ?
     
      <CardBody>
        
        <CardTitle>{name}</CardTitle>
        
        <CardText>{description}</CardText>
        <CardImg top src={picture} alt="Card image cap" />
        {recipe.ingredients && recipe.ingredients.map((ingredient) => (
          
          
          <ListGroup>
            <ListGroupItem>
              {ingredient.name}{" "}
              <Badge pill>
                {ingredient.quantity} {ingredient.unit}
              </Badge>
            </ListGroupItem>
          </ListGroup>
        ))}
        <CardText>{recipe.instructions}</CardText>
        <ButtonGroup>
          <Button onClick={()=>{props.delete(id)}} outline  color="danger">Delete</Button>{' '}
          <Button onClick={()=>{setEditMode(true);setAddMode(false);}} outline color="primary">Edit</Button>{' '}
        </ButtonGroup>
      </CardBody>
      :
      <CardBody>
        
        <CardTitle>Name
          <Input defaultValue={name} onChange={(e)=>setRecipe({...recipe, name:e.target.value})}/>  
          </CardTitle>
        <CardText>Description
          {addMode==false?
          <Input type="textarea" rows="10" defaultValue={description} onChange={(e)=>setRecipe({...recipe, description:e.target.value}, props.update(recipe))}/>
          :
          <Input type="textarea" placeholder="description" onChange={(e)=>props.add({...recipe, description:e.target.value})}/>
          }
          </CardText>
        <CardText>Picture
        <CardImg src={image} alt="preview"  />
        {addMode==false?
           <Input defaultValue={picture} onChange={(e)=>{setRecipe({...recipe, picture:e.target.value}, props.update(recipe)); image=e.target.value;}}/>
          :
          <Input placeholder="picture" onChange={(e)=>props.add({...recipe, picture:e.target.value})}/>
          }
          </CardText>
          {editMode==true ?
          recipe.ingredients.map((ingredient) => (
            <ListGroup>
              <ListGroupItem>
              <Input defaultValue= {ingredient.name} onChange={(e)=>setRecipe({...recipe, Iname:e.target.value})}/>
                <Input defaultValue={ingredient.quantity}/> <Input defaultValue={ingredient.unit}/>
              </ListGroupItem>
            </ListGroup>
          ))
          : null
          }
          

          {/* {addIngredient==true ?
          <ListGroup>
            <ListGroupItem>
            <Input placeholder="ingredient" onChange={(e)=>{setAddIngredient(true)}}/>
                <Input placeholder="quantity"/> <Input placeholder="unit"/>
                <Button onClick={()=>{setAddIngredient(true)}} outline color="primary">+</Button>
            </ListGroupItem>
            
          </ListGroup>
          
         : 
         null
          } */}
          
        <ButtonGroup>  
        {addMode==false ?
        <Button onClick={()=>{setEditMode(!editMode);props.update(recipe)}} outline color="primary">Edit</Button>
        :
        <Button onClick={()=>{setAddMode(!addMode);props.add(recipe)}} outline color="primary">Add</Button>
        }
        </ButtonGroup>

        
        
        
      </CardBody>
}
    </div>
  );
}
export default Recipe;
