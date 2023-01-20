import { createContext, useState } from "react";

const UserContext = createContext({});

export default UserContext;


export const UserProvider = ({children}) => {
    const [value, setValue] = useState(false)

    return (
        <UserContext.Provider value={{value, setValue}}>
            {children}
        </UserContext.Provider>
    )
}