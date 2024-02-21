import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Time: {time}</div>;
};

export default function UseEffect() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      <Stopwatch></Stopwatch>
      {names.map((name) => (
        <button onClick={() => onSelectedNameChange(name)}>{name}</button>
      ))}
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}
