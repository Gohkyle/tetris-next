interface IProps {
    title:string;
    text:string;
}
export const MessageModal = ({title, text}:IProps) => {
    return(
        <div className="message-modal">
            <h2>{title}</h2>
            <p>{text}</p>
        </div> 
    )
}