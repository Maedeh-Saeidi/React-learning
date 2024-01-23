import { useState } from "react"

export default function Form() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  })
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name)
  }
  return (
    <div> 
      {name.firstName} - {name.lastName}
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setName({...name ,firstName: e.target.value});
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setName({...name ,lastName:e.target.value});
          }}
        />
        <button onClick={(e) => {
          handleSubmit(e)
        }}>
          Add
        </button>
      </form>
    </div>
  )
}