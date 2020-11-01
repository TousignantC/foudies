import React from "react";

export const Instruction = (props) => {
  return(
    <div className={"instruction"}>
      <li>{props.instructions}</li>
      {/*<div>{props.instructions}</div>*/}
      {/*<div>{props.instructions.map(ins => <li>ins</li>)}</div>*/}
    </div>
  );
};