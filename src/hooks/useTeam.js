import { useContext } from "react"
import TeamContext from "../contexts/TeamContext"

export const useTeam = () => {
    const teamContext = useContext(TeamContext);

    return teamContext;
}