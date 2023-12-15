import styled from "styled-components";

export const StyledNextBlock = styled.div<{size: number}>`
  display: grid;
  width: calc(4 *var(--square-size));
  height: calc(4 *var(--square-size));

  place-content: center;
  grid-template-columns: repeat(${props=>props.size}, var(--square-size));
  grid-template-rows: repeat(${props=>props.size}, var(--square-size));
  grid-gap: 0;
  align-self: flex-start;
`;
