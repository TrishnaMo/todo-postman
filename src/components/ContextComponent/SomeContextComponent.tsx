import React, { createContext, useContext } from "react";
// 1. Create Context
const SomeContext = createContext("Default Value");

const FirstComponent: React.FC = () => {
  return <SecondComponent />;
};

const SecondComponent: React.FC = () => {
  // 3. Consume the context
  const value = useContext(SomeContext);
  return <>Second: {value}</>;
};

const ThirdComponent: React.FC = () => {
  // 3. Consume the context
  const value = useContext(SomeContext);
  return <>Third: {value}</>;
};

export const FourthComponent: React.FC = () => {
  // 3. Consume the context
  const value = useContext(SomeContext);
  return <>Fourth: {value}</>;
};

const SomeContextComponent = () => {
  const someText = "I love you";

  // 2. Provide the context to the children components
  return (
    <SomeContext.Provider value={someText}>
      <FirstComponent />
      <br />
      <ThirdComponent />
      <br />
      <FourthComponent />
    </SomeContext.Provider>
  );
};

export default SomeContextComponent;
