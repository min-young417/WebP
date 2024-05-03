import { useState } from "react";
import "./App.css";
import Page from "../../../../ex2/src/Components/Page";
import { ThemeContext } from "../../../../ex2/src/context/ThemeContext";
function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    // 📌
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
    <Page />
    </ThemeContext.Provider>
  );
}
 
export default App;
