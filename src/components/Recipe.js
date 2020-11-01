import React from "react";
import "./Recipe.css";
import {Ingredient} from "./Ingredient"
import {Instruction} from "./Instruction"

export const Recipe = (props) => {
  return(
    <div className={"recipe"}>
      <div>{props.recipe.name}</div>
      <p>Ingrédients:</p>
       {props.recipe.ingredients.map(ing => <Ingredient name={ing.name} qty={ing.qty} qtyType={ing.qtyType}/>)}
       <p>Instructions:</p>
       {props.recipe.instructions.map(ins => <Instruction instructions={ins}/>)}
    </div>
  );
};