import { createContext, useState, useContext } from "react"
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)

   // setInterval(() => setNumber(number + 1), 1000)
    return (
        <AuthContext.Provider value={{  isAuthenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}