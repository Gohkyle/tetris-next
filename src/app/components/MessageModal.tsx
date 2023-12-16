import { StyledMessageModal } from "./styles/StyledMessageModal";

interface IProps {
    title:string;
    text:string;
}
export const MessageModal = ({title, text}:IProps) => {
    return(
        <StyledMessageModal>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className = "scoreboard-button" onClick={()=>{}}>
                PLAY
            </button>
            <button className = "scoreboard-button" onClick ={()=>{}}>
                RESTART
            </button>
        </StyledMessageModal>

    )
}