import "./App.css";
import "./styles.css";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import Box from "./components/Context/Box";

function App() {
  const personName = {
    first: "Maedeh",
    last: "Saeidi",
  };

  const nameList = [
    {
      first: "Maedeh",
      last: "Saeidi",
    },
    {
      first: "AmirReza",
      last: "Abbasi",
    },
    {
      first: "Mary",
      last: "Moshiri",
    },
    {
      first: "Bita",
      last: "Mansouri",
    },
  ];

  return (
    <div>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
