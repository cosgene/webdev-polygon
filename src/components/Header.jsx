import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <div>Header</div>
            <Nav items={['Main', 'Menu']}/>
        </header>
    );
}

export default Header;