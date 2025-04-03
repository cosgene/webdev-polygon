import React from 'react';
import Menu from './Menu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header>
            <ThemeToggle/>
            <div>Lab List</div>
        </header>
    );
}

export default Header;