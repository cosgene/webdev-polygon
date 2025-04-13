import { Link } from "react-router-dom";

const Menu = ({ items }) => {
    return (
        <nav>
            <h2>Lab List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
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