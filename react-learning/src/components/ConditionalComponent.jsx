import { useState } from "react";
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(false);
  let output;
  if (display) {
    output = <h3>This is a coditional component</h3>;
  } else {
    output = <h3>Nothing to see here</h3>;
  }
  return <div>{output}</div>;
}