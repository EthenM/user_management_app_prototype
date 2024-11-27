"use client"

const { createContext, useContext } = require("react");
const { default: useAuth } = require("./use-auth");


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const {user, login, logout} = useAuth();
    
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
}

export const useUserAuth = () => {
    return useContext(AuthContext)
}
