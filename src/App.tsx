import React from "react";
import SomeComponent from "./components/ContextComponent/SomeComponent";
import SomeContextComponent, {
  FourthComponent,
} from "./components/ContextComponent/SomeContextComponent";
import HomeScreen from "./components/HomeScreen/index";

const App = () => {
  return (
    <>
      <SomeComponent />
      <br />
      <SomeContextComponent />
      <br />
      <FourthComponent />
      <br/>
      <HomeScreen />
    </>
  );
};

export default App;
