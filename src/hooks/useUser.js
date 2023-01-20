import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export const useUser = () => {
    const userContext = useContext(UserContext);

    return userContext;
}