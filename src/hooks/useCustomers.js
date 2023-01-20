import { useContext } from "react"
import CustomersContext from "../contexts/CustomersContext"

export const useCustomers = () => {
    const customerContext = useContext(CustomersContext);

    return customerContext;
}