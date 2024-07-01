import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [result, setResult] = useState(10);

  const add = () => {
    const value = result + 1;
    setResult(value);
  };
  const remove = () => {
    const value = result - 1;
    if(value >= 0) {
      setResult(value);
    }
  };

  return (
    <>
      <Button name="dodaj" className="add" handleClick={add}></Button>
      <Button name="odejmij" className="remove" handleClick={remove}></Button>
      <p>Wynik: {result}</p>
    </>
  );
};

export default Counter;
