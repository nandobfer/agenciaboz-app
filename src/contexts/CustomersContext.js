import { createContext, useState } from "react";

const CustomersContext = createContext({});

export default CustomersContext;


export const CustomersProvider = ({children}) => {
    const [value, setValue] = useState(false)

    return (
        <CustomersContext.Provider value={{value, setValue}}>
            {children}
        </CustomersContext.Provider>
    )
}