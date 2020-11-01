import React from "react";


export const Ingredient = (props) => {
  return(
    <div className={"ingredient"}>
      <div>{props.name}: {props.qty} {props.qtyType}</div>
    </div>
  );
};