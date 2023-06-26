import React from "react";
import { ElementMagnitude, ElementContainer } from "./Element.styled";

export const Element = (props: any) => {
  return (
    <ElementContainer>
      <p>{props.number}</p>
      <ElementMagnitude height={props.height}></ElementMagnitude>
    </ElementContainer>
  );
};
