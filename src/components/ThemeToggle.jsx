import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Change theme (current {theme})
        </button>
    );
}

export default ThemeToggle;