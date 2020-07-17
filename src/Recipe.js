import React from "react";
import {MOCK} from './Mock';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export function Recipe(props) {
  return (
    <div className="Recipe">
      <CardBody>
  <CardTitle>{MOCK[0].name}</CardTitle>
  
        <CardText>
        {MOCK[0].description}
        </CardText>
        <CardImg top width="100%" src={MOCK[0].picture} alt="Card image cap" />
      </CardBody>
    </div>
  );
}
export default Recipe;