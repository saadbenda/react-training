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

export function Recipe(props) {
  const [recipe, setRecipe ]= useState(props.recipe);
  const [editMode, setEditMode ]= useState(false);
  const [addMode, setAddMode ]= useState(false);
  const {id, name, picture, description} = props.recipe;

  //const deleteR = props.deleteRecipeF;
  

  return (
    <div className="Recipe">
      
      {editMode==false  &&  addMode==false ?
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <CardImg top src={picture} alt="Card image cap" />
        {recipe.ingredients.map((ingredient) => (
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
          <Button onClick={()=>{props.delete(id)}} outline color="primary">Delete</Button>{' '}
          <Button onClick={()=>{setEditMode(false);setAddMode(true);}} outline color="primary">Add</Button>{' '}
          <Button onClick={()=>{setEditMode(true);setAddMode(false);}} outline color="primary">Edit</Button>{' '}
        </ButtonGroup>
      </CardBody>
      :
      <CardBody>
        <InputGroup>
        <CardTitle>
          {addMode==false ?
          <Input defaultValue={name} onChange={(e)=>setRecipe({...recipe, name:e.target.value})}/>
          
          :
          <Input placeholder={name} onChange={(e)=>props.add({...recipe, name:e.target.value})}/>
        
          }
          </CardTitle>
        <CardText>
          {addMode==false?
          <Input type="textarea" defaultValue={description} onChange={(e)=>setRecipe({...recipe, description:e.target.value})}/>
          :
          <Input type="textarea" placeholder={description} onChange={(e)=>setRecipe({...recipe, description:e.target.value})}/>
          }
          </CardText>
        <CardText>
        {addMode==false?
           <Input defaultValue={picture} onChange={(e)=>setRecipe(e.target.value)}/>
          :
          <Input placeholder={picture} onChange={(e)=>setRecipe(e.target.value)}/>
          }
          </CardText>
        <ButtonGroup>
        {addMode==false ?
        <Button onClick={()=>{setEditMode(!editMode)}} outline color="primary">Edit</Button>
        :
        <Button onClick={()=>{setAddMode(!addMode)}} outline color="primary">Add</Button>
        }
        </ButtonGroup>

        
        

      </InputGroup>
      </CardBody>
}

    </div>
    
  );
}
export default Recipe;
