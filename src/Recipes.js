import React from "react";
import "./Recipes.css";
import Recipe from "./Recipe";
import { MOCK } from "./Mock";

export function Recipes(props) {
  return (
    <div className="Recipes">
      {MOCK.map(recipe => 
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}
export default Recipes;
