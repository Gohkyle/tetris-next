import { StyledSquare } from "./styles/StyledSquare"

interface IProps {
    color: string
}

export const Square = ({color}:IProps) => {
    return (
        <StyledSquare color={color}/>
    )
}
