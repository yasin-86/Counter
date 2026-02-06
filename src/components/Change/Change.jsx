import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export const Change = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        width: "25%",
        padding: "5px",
        backgroundColor: "transparent",
        color: "#a8a8a8",
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
      dark/Light
    </button>
  );
};

export default Change;