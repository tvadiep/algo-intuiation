import styled from "styled-components";

interface ElementMagnitudeProps {
  height?: number;
}
export const ElementContainer = styled.div`
  text-align: center;
`;

export const ElementMagnitude = styled.div<ElementMagnitudeProps>`
  background-color: rgb(173, 216, 230);
  height: ${(props) => props.height && 1 + props.height * 3}px;
  width: 25px;
  text-align: center;
  margin: 0px 3px;
`;
