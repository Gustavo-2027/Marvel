import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { Moon } from "lucide-react"

export default function ButtonTheme() {
    const {setDarkMode} = useContext(ThemeContext)

    return <button onClick={() => setDarkMode(prev => !prev)}>
          <Moon className="w-5 cursor-pointer transition-transform hover:scale-115" />
        </button>
}