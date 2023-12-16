import { Shape } from "@/app/types";
import styled from "styled-components";

export const StyledSquare = styled.div<{color: Shape}>`
  background-color: var(--color-${(props) => props.color});
  border-style: solid;
  box-sizing: border-box;
  width: auto;
  height: auto;

  border-width: ${(props) =>
    props.color === "0" ? "0px" : "var(--border-width)"};
  border-left-color: rgba(255, 255, 255, 0.20);
  border-top-color: rgba(255, 255, 255, 0.33);
  border-right-color: rgba(0, 0, 0, 0.15);
  border-bottom-color: rgba(0, 0, 0, 0.5);
`;
