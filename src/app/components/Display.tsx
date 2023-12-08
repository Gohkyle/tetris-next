interface iProps {
    text: string
}

export const Display = ({text}: iProps) => {
    return (
        <div className="display-container" >
            {text}
        </div>
    )
}