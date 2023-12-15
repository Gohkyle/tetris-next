import styled from "styled-components";

export const StyledNextBlock = styled.div<{size: number}>`
  display: grid;
  width: calc(4 *var(--square-size));
  height: calc(4 *var(--square-size));

  grid-template-columns: repeat(${props=>props.size}, var(--square-size));
  grid-template-rows: repeat(${props=>props.size}, var(--square-size));
  place-content: center;
  grid-gap: 0;


  background-color: var(--color-0);
`;
