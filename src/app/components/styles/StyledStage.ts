import styled from "styled-components";

export const StyledStage = styled.div<{height:number, width:number}>`
  display: grid;

  width:25vw;
  max-width:1000px;
  grid-template-rows: repeat(${(props)=>props.height}, calc(25vw /${(props)=>props.width}));
  grid-template-columns: repeat(${(props)=>props.width},  1fr);
  grid-gap:1px;
  align-self: flex-start;
`;
