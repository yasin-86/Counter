import { createContext, useContext, useState } from "react";

const ThemeContexts = createContext();

export function ThemeContext({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContexts.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContexts.Provider>
  );
}


export const useTheme = ()=>{
    const context = useContext(ThemeContexts)
    return context;
};
