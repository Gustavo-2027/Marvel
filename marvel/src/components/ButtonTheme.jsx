import { Moon } from "lucide-react"
import { useThemeContext } from "../hooks/useThemeContext"

export default function ButtonTheme() {
    const {setDarkMode} = useThemeContext()

    return <button onClick={() => setDarkMode(prev => !prev)}>
          <Moon className="w-5 cursor-pointer transition-transform hover:scale-115" />
        </button>
}