import React from 'react';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';
import { useLoginState } from '../context/AuthContext';
import UserProfile from './UserProfile';

const Header = ({username}) => {
    const {logout} = useLoginState();
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <ThemeToggle/>
            <UserProfile username={username}/>
        </header>
    );
}

export default Header;