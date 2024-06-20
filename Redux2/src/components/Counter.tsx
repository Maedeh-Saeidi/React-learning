import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../states/store"
import { decrement, increment, incrementByAmount, incrementAsync } from "../states/counter/counterSlice";

export default function Counter() {

  const count = useSelector((state: RootState)=> state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementAsync(10))}>Increment by amount + 10</button>

    </div>
  )
}
