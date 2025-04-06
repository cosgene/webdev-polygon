import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
    
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

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