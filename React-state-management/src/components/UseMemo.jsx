import { useState, useMemo } from "react";

export default function UseMemo() {
  const [numbers] = useState([10, 20, 30]);
  //accumulator
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [names] = useState(["John", "Paul", "George", "Ringo"]);
  const countTotal = count1 + count2;

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <div>
      <div> Total : {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>SortedNames: {sortedNames.join(", ")}</div>
      <button onClick={() => setCount1(count1 + 1)}>Count 1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2: {count2}</button>
      <div>Count Total: {countTotal}</div>
    </div>
  );
}
