import { createContext, useContext, useState } from "react";

type theme = "light" | "dark" | "system";

const ThemeContext = createContext<theme>("system");

const useGetTheme = () => useContext(ThemeContext);


function MyComponent(){ 
  const theme = useGetTheme();
  return (
    <div>
      <h1>Current theme: {theme}</h1>
    </div>
  )
}


export default function MyContextComponent() {
  const [theme, setTheme] = useState<theme>("system");

  return (
    <ThemeContext.Provider value={theme}>
      <MyComponent/>
    </ThemeContext.Provider>
  )
}