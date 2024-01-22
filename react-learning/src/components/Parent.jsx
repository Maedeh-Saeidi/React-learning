import { useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const changeParentCount = () => {
    setParentCount(parentCount + 1);
  };
  const changeChildCount = () => {
    setChildCount(childCount + 1);
  };
  return (
    <div>
      <h1>Parent count is: {parentCount}</h1>
      <Child count={childCount} />
      <button onClick={changeParentCount}>Increment parent count</button>
      <button onClick={changeChildCount}>Increment child count</button>
    </div>
  )
}