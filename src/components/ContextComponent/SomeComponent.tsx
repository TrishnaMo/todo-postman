import React from "react";

interface ComponentProps {
  text: string;
}

const FirstComponent: React.FC<ComponentProps> = ({ text }) => {
  return <SecondComponent text={text} />;
};

const SecondComponent: React.FC<ComponentProps> = ({ text }) => {
  return <>{text}</>;
};

const SomeComponent = () => {
  const value = "I love you";
  return (
    <>
      <FirstComponent text={value} />
    </>
  );
};

export default SomeComponent;
