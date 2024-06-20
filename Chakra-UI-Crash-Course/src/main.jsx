import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#024fc9",
      800: "#146af5",
      700: "#2977f2",
      600: "#337df2",
      500: "#4287f5",
    },
  },
  fonts: {
    body: "Tahoma",
    heading: "Courier New",
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
