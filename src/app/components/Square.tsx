interface IProps {
    color: string
}

export const Square = ({color}:IProps) => {
    return (
        <div className={`grid-square color-${color}`} >

        </div>
    )
}
