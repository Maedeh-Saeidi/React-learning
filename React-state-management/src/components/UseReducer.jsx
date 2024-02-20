import { useReducer } from "react";
function UserForm() {
  const [state, dispatch] = useReducer((state, action) =>
  (
    {
      ...state,
      ...action
    }
  )
    , {
      first: "",
      last: ""
    })
  return (
    <div>
      <input type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })} />
      <input type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })} />
      <div>First: {state.first}</div>
      <div>Last : {state.last}</div>
    </div>
  )
}
function NameList() {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { ...state, names: [...state.names, state.name], name: "" };
    }
  }, {
    names: [],
    name: "",
  })

  return (
    <div>
      <div>{state.names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}</div>
      <input type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })} />
      <div>Name = {state.name}</div>
      <button
        onClick={() => dispatch({ type: "ADD_NAME" })}
      >Add Name</button>
    </div>
  )
}
export default function UseReducer() {
  return (
    <div>
      <UserForm></UserForm>
      <NameList></NameList>
    </div>
  )
}
//Introduction :
/*
//the first way:
const numbers = [10, 20, 30];
let total = 0;
numbers.forEach((num) => {
  total += num;
})
// the second way:
//cv = current value
//the 0 is the initial value of the output. like the total in the first way
numbers.reduce((cv, num) => cv + num, 0);
*/