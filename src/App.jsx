import { createContext, useState } from "react";
import "./App.css";
import Buttonlist from "./components/Buttonlist/Buttonlist";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme == "light" ? "light" : null }`}> 
          <Buttonlist />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
