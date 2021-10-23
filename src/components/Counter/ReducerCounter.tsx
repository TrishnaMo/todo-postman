import React, { createContext, useContext, useReducer } from "react";

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

// interface ButtonProps {
//   //   dispatch: (action: CounterAction) => void;
//   dispatch: React.Dispatch<CounterAction>;
// }

const CountDisplay: React.FC = () => {
  const {
    store: { count },
  } = useContext(StoreContext);
  return <div>{count}</div>;
};

const IncrementButton: React.FC = () => {
  const { dispatch } = useContext(StoreContext);
  return <button onClick={() => dispatch({ type: "increment" })}>+</button>;
};

const DecrementButton: React.FC = () => {
  const { dispatch } = useContext(StoreContext);
  return <button onClick={() => dispatch({ type: "decrement" })}>-</button>;
};

const ResetButton: React.FC = () => {
  const { dispatch } = useContext(StoreContext);
  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
};

interface StoreContextType {
  store: CounterStore;
  dispatch: React.Dispatch<CounterAction>;
}

const StoreContext = createContext<StoreContextType>({
  store: storeInitalState,
  dispatch: (action) => {},
});

const ReducerCounter = () => {
  const [store, dispatch] = useReducer(reducer, storeInitalState);

  return (
    <StoreContext.Provider value={{ store: store, dispatch: dispatch }}>
      <CountDisplay />
      <IncrementButton />
      <DecrementButton />
      <ResetButton />
    </StoreContext.Provider>
  );
};

export default ReducerCounter;
