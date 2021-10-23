import React, { useReducer } from "react";

interface CounterStore {
  count: number;
}

interface CounterAction {
  type: "increment" | "decrement" | "reset";
}

const storeInitalState: CounterStore = { count: 0 };

const reducer = (state: CounterStore, action: CounterAction) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  } else if (action.type === "reset") {
    return { count: 0 };
  } else {
    throw new Error();
  }
};


const ReducerCounter = () => {
  const [store, dispatch] = useReducer(reducer, storeInitalState);
  return (
    <div>
    {store.count}
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
  </div>
  );
};

export default ReducerCounter;
