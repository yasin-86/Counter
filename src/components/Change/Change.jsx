
import "./Change.css";
import { useTheme } from "../../Context/ThemeContext";

export const Change = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      style={{
        width: "25%",
        padding: "5px",
        backgroundColor: "transparent",
        color: "#00ff99",
        fontFamily: '"Digital Numbers", sans-serif',
        fontSize: "18px",
        margin: "5px 0",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      className={`${theme == "light" ? "light" : "dark"}`}
      onClick={() =>
        setTheme((prevTheme) => (prevTheme == "dark" ? "light" : "dark"))
      }
    >
      <p>dark/Light</p>
    </button>
  );
};

export default Change;
