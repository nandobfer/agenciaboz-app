import { createContext, useState } from "react";

const UserContext = createContext({});

export default UserContext;


export const UserProvider = ({children}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [value, setValue] = useState(user || false)

    return (
        <UserContext.Provider value={{value, setValue}}>
            {children}
        </UserContext.Provider>
    )
}