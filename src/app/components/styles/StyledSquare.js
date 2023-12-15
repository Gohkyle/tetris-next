import styled from "styled-components";

export const StyledSquare = styled.div`
  background-color: var(--color-${props=>props.color});
  border-style: solid;
  box-sizing: border-box;
  width: var(--square-size);
  height: var(--square-size);
  border-width: ${props=>(props.color=== "0") ? "0px" : "var(--border-width)"};
  border-top-color: var(--border-top-color);
  border-right-color: var(--border-right-color);
  border-bottom-color: var(--border-bottom-color);
  border-left-color: var(--border-left-color);
`;
