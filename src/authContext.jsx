import { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        isLoggedIn: !!localStorage.getItem('isLoggedIn'),
        username: localStorage.getItem('username') || null,
    });

    const login = useCallback((username) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        setAuthState({isLoggedIn: true, username});
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        setAuthState({isLoggedIn: false, username: null});
    }, []);

    return (
        <AuthContext.Provider value={{...authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useLoginState = () => {
    const context = useContext(AuthContext);
    return context; 
}