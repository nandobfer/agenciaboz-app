import { createContext, useState } from "react";

const TeamContext = createContext({});

export default TeamContext;


export const TeamProvider = ({children}) => {
    const [value, setValue] = useState(false)

    return (
        <TeamContext.Provider value={{value, setValue}}>
            {children}
        </TeamContext.Provider>
    )
}