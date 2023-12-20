import { createStage } from "../gameHelper";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { StyledMessageModal } from "./styles/StyledMessageModal";

interface IProps {
    title:string;
    text:string;
}
export const MessageModal = ({title, text}:IProps) => {
    const [player, updatePlayerPos, resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player)

    const startGame = () => {
        setStage(createStage())
        resetPlayer()
    }


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