import { useTheme } from "../../Context/ThemeContext";

function Root({ children }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`${theme == "light" ? "light" : null}`}
      style={{ width: "100vw", height: "100vh", textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Root;
