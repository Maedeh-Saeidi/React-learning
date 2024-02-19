import { useState } from 'react'
function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(() => "Jacky");

  function onAddName() {
    setList([...list, name]);
    setName("");
  }
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={onAddName}
      >Add</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div>
      <button
        onClick={addOne}
      >Count = {count}</button>
    </div>
  )
}
function App() {
  return (
    <div>
      <Counter></Counter>
      <NameList></NameList>
    </div>
  )
}
export default App
