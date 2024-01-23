import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [IncrementBy,setIncrementBy] = useState(1)
  function Increment() {
    setCount(count + 1);
  }
  function Decrement (){
    setCount(count - 1);
  }
  function increaseIncrement() {
    setIncrementBy(IncrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(IncrementBy - 1);
  }
  return(
    <div>
      <h1>Count Value is : {count}</h1>
      <button onClick={Increment}>Increment value</button>
      <button onClick={Decrement}>Decrement value</button>

      <h1>We are Increment the value by: {IncrementBy}</h1>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  )
}