import { createContext, useState } from "react";

const TeamContext = createContext({});

export default TeamContext;


export const TeamProvider = ({children}) => {
    const team = JSON.parse(localStorage.getItem("team"))
    const [value, setValue] = useState(team || false)

    return (
        <TeamContext.Provider value={{value, setValue}}>
            {children}
        </TeamContext.Provider>
    )
}