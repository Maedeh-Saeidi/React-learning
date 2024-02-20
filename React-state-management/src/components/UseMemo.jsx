import { useState, useMemo } from "react";

export default function UseMemo() {
  const [numbers] = useState([10, 20, 30]);
  //accumulator
  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  console.log(total);
  return (
    <div>
      <div> Total : {total}</div>
      <div>Names: {names.join(", ")}</div>
      <div>SortedNames: {sortedNames.join(", ")}</div>
    </div>
  );
}
