import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function UniversalFormElement({ name }) {
  const [inputValue, setInputValue] = useState("abc");
  const [isClicked, setIsClicked] = useState(false);

  const handleBtnClick = () => {
    setIsClicked(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", width: "200px" }}
    >
      <h3 style={{ color: "blue" }}>Universal Input Component</h3>
      <Input
        className="input"
        style={{ margin: "10px" }}
        handleOnInput={handleInputChange}
      />
      <Button name={name} handleClick={handleBtnClick} />
      {isClicked ? <p>{inputValue}</p> : <span> Brak danych</span>}
    </div>
  );
}

export default UniversalFormElement;
