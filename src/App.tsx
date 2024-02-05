import { Style } from "@mui/icons-material";
import { StyleToggle } from "./components/StyleToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <StyleToggle />
      </ThemeProvider>
      <h1></h1>
    </div>
  );
}

export default App;