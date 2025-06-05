import { createContext, useState } from "react"; 

export const ThemeContext = createContext() // Criação do contexto

export function ThemeProvider({children}) {

    const [darkMode, setDarkMode] = useState(true) // State de controle do tema

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )

}