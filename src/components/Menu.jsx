const Menu = ({ items, onSelectItem }) => {
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <li key={index} onClick={() => onSelectItem(item)}>{item}</li>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;