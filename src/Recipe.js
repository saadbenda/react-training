import React from "react";
import './Recipe.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import {
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export function Recipe(props) {
  console.log("recipe" +props.recipe);
  const recipe = props.recipe;
  return (
    <div className="Recipe">
      <CardBody>
        <CardTitle>{props.recipe.name}</CardTitle>
        <CardText>{recipe.description}</CardText>
        <CardImg top src={recipe.picture} alt="Card image cap" />
        {recipe.ingredients.map(ingredient=>
        <ListGroup>
        <ListGroupItem>{ingredient.name}</ListGroupItem>
        <ListGroupItem>{ingredient.quantity}</ListGroupItem>
        <ListGroupItem>{ingredient.unit}</ListGroupItem>
      </ListGroup>
        )}
        <CardText>{recipe.instructions}</CardText>
      </CardBody>
     
    </div>
  );
}
export default Recipe;
