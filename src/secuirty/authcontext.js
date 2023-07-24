import { createContext, useState, useContext } from "react"
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)
function login (username, password){
    if (username === "iheb meftah" && password === "1234") {
        setAuthenticated(true);
        return true
      } else {
        setAuthenticated(false);
        return false
      }
}

function logout(){
    setAuthenticated(false)
}
   // setInterval(() => setNumber(number + 1), 1000)
    return (
        <AuthContext.Provider value={{  isAuthenticated , login ,logout }}>
            {children}
        </AuthContext.Provider>
    )
}