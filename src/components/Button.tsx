import { useTheme } from "../contexts/ThemeContext";
import { FaMoon, FaRegSun } from "react-icons/fa6";
export function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        display: "flex",
        padding: "4px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaMoon size="40px" color="orange" style={{ marginRight: "4px" }} />
      ) : (
        <FaRegSun size="40px" color="yellow" style={{ marginRight: "4px" }} />
      )}
      Mudar tema para {theme === "dark" ? "light" : "dark"}{" "}
    </button>
  );
}