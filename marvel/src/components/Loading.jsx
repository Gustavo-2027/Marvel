import { useThemeContext } from "../hooks/useThemeContext";

export default function Loading() {
  const {darkMode} = useThemeContext()

  return (
    <div className="flex justify-center items-center h-280">
      <div className={`animate-spin rounded-full h-35 w-32 border-t-5 border-b-4 hover:scale-110 duration-700 ${darkMode ? "border-red-600" : "border-zinc-900"}`}></div>
    </div>
  );
}
