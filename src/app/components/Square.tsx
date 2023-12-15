import { StyledSquare } from "./styles/StyledSquare"

import { Shape } from "../types"

interface IProps {
    color: Shape
}

export const Square = ({color}:IProps) => {
    return (
        <StyledSquare color={color}/>
    )
}
