import { useUser } from "./useUser";

export const useLogout = () => {
    const user = useUser()

    const logout = () => {
        user.setValue(false)
        localStorage.setItem("user", false)
    }

    return logout
}