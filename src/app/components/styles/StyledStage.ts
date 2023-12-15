import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(var(--cols), var(--square-size));
  align-self: flex-start;
`;
