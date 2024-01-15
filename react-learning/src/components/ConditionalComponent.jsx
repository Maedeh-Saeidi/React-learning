import { useState } from "react";
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (<div>
      <Counter></Counter>
    </div>
    );
  } else {
    return (
    <div>
      <FunctionalCounter></FunctionalCounter>
      </div>
    );
  }
}