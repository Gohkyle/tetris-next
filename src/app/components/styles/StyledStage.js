import styled from "styled-components";

export const StyledStage = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--square-size));
  grid-gap: 0;
  align-self: flex-start;
`;
