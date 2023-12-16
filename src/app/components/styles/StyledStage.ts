import styled from "styled-components";

export const StyledStage = styled.div<{height:number, width:number}>`
display: grid;
grid-template-columns: repeat(${(props)=>props.width}, var(--square-size));
grid-template-rows: repeat(${(props)=>props.height}, var(--square-size));

align-self: flex-start;

border: 5px solid grey;
border-radius: 5px;
`;
