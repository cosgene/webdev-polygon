import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext("light");

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#222222";
        document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;