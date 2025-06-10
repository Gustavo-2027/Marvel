import { useContext } from "react"
import { CharacterContext } from "../contexts/CharacterContext"


export function useCharacterContext() {
    const context = useContext(CharacterContext)

    if(!context) {
        console.log("Erro de contexto: CharacterContext")
    }

    return context
}