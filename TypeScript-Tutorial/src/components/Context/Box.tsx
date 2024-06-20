import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {

  const Theme = useContext(ThemeContext)
  return <div style={{backgroundColor: Theme.primary , color: Theme.primary.text}}>Theme Context</div>;
}
