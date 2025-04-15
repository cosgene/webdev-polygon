import { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { restoreUser } from '../redux/actions';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });

    // const s = (loginFlag) => () => {
    //     setIsLoggedIn(loginFlag);
    //     localStorage.setItem('isLoggedIn', loginFlag);
    // }

    // const login = s(true);
    // const logout = s(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && !user) {
        dispatch(restoreUser(JSON.parse(storedUser)));
        setIsLoggedIn(true);
        }
    }, [dispatch, user]);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        dispatch({ type: 'SET_USER', payload: null });
        localStorage.removeItem('user');
    };

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