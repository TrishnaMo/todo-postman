import React from "react";
import ReducerCounter from "./components/Counter/ReducerCounter";
import StateCounter from "./components/Counter/StateCounter";
import HomeScreen from "./components/HomeScreen/index";

const App = () => {
  return (
    <>
      <ReducerCounter />
      <HomeScreen />
    </>
  );
};

export default App;
