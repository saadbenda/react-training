import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { render } from '@testing-library/react';
import EditIcon from '@material-ui/icons/Edit';
import { ListGroup, ListGroupItem, Input, InputGroup, InputGroupAddon, InputGroupText, Badge } from "reactstrap";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export function Ingredient(props) {
  const classes = useStyles();
  const [ingre, setIngredient ]= useState(props.ingredient);
  //const {ingre,quantity, unit} = ingredient
  const [editMode, setEditMode ]= useState(props.editModeI);
;

  return (
    <ListGroup>
    <ListGroupItem>
      {ingre.ingredient && ingre.ingredient.name}{" "}
      <Badge pill>
        {ingre.quantity} {ingre.unit}
      </Badge>
      {editMode==true?
      <div>
      <IconButton aria-label="delete" className={classes.margin} >
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label="edit" className={classes.margin}>
      <EditIcon />
    </IconButton>
    </div>
    :
    null
      }
    </ListGroupItem>
  </ListGroup>
  );
}
export default Ingredient;
