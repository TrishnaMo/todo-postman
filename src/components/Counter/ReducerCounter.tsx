import React, { useReducer } from "react";

interface CounterStore {
  count: number;
}

interface CounterAction {
  type: "increment" | "decrement" | "reset";
}

const storeInitalState: CounterStore = { count: 0 };

const reducer = (state: CounterStore, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
};

interface ButtonProps {
  //   dispatch: (action: CounterAction) => void;
  dispatch: React.Dispatch<CounterAction>;
}

const CountDisplay: React.FC<{ store: CounterStore }> = ({ store }) => {
  return <div>{store.count}</div>;
};

const IncrementButton: React.FC<ButtonProps> = ({ dispatch }) => {
  return <button onClick={() => dispatch({ type: "increment" })}>+</button>;
};

const DecrementButton: React.FC<ButtonProps> = ({ dispatch }) => {
  return <button onClick={() => dispatch({ type: "decrement" })}>-</button>;
};

const ResetButton: React.FC<ButtonProps> = ({ dispatch }) => {
  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
};

const ReducerCounter = () => {
  const [store, dispatch] = useReducer(reducer, storeInitalState);

  return (
    <div>
      <CountDisplay store={store} />
      <IncrementButton dispatch={dispatch} />
      <DecrementButton dispatch={dispatch} />
      <ResetButton dispatch={dispatch} />
    </div>
  );
};

export default ReducerCounter;
