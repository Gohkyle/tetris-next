import styled from "styled-components";

export const StyledTetris = styled.div`
  --grid-width: calc((var(--square-size) * var(--cols)));
  --grid-height: calc((var(--square-size) * var(--rows)));

  display: grid;
  grid-gap: var(--square-size);
  grid-template-columns: 100px var(--grid-width) 100px;
  grid-template-rows: 100px var(--grid-height) 100px;

  justify-content: center;
`;
