import { createContext } from "react";
import { Theme } from "./Theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(Theme);

export const ThemeContextProvider = ({
  children
}: ThemeContextProviderProps) => {
  return <ThemeContextProvider value={Theme}>{children}</ThemeContextProvider>;
};
 