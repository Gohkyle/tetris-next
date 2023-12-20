import { StyledMessageModal } from "./styles/StyledMessageModal";

interface IProps {
    title:string;
    text:string;
    startGame: () => void;
}
export const MessageModal = ({title, text, startGame}:IProps) => {

    return(
        <StyledMessageModal>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={startGame}>
                PLAY
            </button>
            <button className = "scoreboard-button" onClick ={()=>{}}>
                RESTART
            </button>
        </StyledMessageModal>

    )
}