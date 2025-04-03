import { Link } from "react-router-dom";

const Menu = ({ items, onSelectItem }) => {
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => onSelectItem(item)}>
                        <Link to={`/lab/${index + 1}`}>
                           {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;