import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    const s = (loginFlag) => () => {
        setIsLoggedIn(loginFlag);
        localStorage.setItem('isLoggedIn', loginFlag);
    }

    const login = s(true);
    const logout = s(false);

    return (
        <AuthContext.Provider value={{isLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useLoginState = () => {
    const context = useContext(AuthContext);
    return context; 
}