import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunc }) {
  console.log("hello motherfucker");
  const sortedList = useMemo(() => {
    console.log("Running Sort");
    return [...list].sort(sortFunc), [list, sortFunc];
  }, []);

  return <div>{sortedList.join(",")}</div>;
}

export default function UseMemo() {
  const [numbers] = useState([10, 20, 30]);
  //accumulator
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = count1 + count2;

  const sortedNames = useMemo(() => [...names].sort(), [names]);
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <div>
      <div> Total : {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc}></SortedList>
      <button onClick={() => setCount1(count1 + 1)}>Count 1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2: {count2}</button>
      <div>Count Total: {countTotal}</div>
    </div>
  );
}
