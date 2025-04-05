import React from 'react';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';
import { useLoginState } from '../authContext';

const Header = () => {
    const {username, logout} = useLoginState();
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
            <ThemeToggle/>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span>{username}</span>
                <button onClick={logout}>Log out</button>
            </div>
        </header>
    );
}

export default Header;