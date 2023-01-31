import { createContext, useState } from "react";

const CustomersContext = createContext({});

export default CustomersContext;


export const CustomersProvider = ({children}) => {
    const customers = JSON.parse(localStorage.getItem("customers"))
    const [value, setValue] = useState(customers || false)

    return (
        <CustomersContext.Provider value={{value, setValue}}>
            {children}
        </CustomersContext.Provider>
    )
}