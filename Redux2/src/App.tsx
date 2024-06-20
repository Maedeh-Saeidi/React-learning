import Counter from "./components/Counter";

//store  
// interface CounterState {
//   value: number;
// }
// interface UserState{
//   isSignedIn: boolean;
// }
//actions
// const incrementByAmount = {type: "INCRENENT", payload : 10};
// const decrement = {type: "DECREMENT"}; 
//reducers (immutability)
 



const App = () =>{
  return (
    <div>
      <h2>Redux complete torurial</h2>
      <Counter/>
    </div>
  )
}

export default App;