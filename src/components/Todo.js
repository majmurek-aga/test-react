import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["todo1", "todo2"]);
  const [value, setValue] = useState("podaj wartość");
  const [type, setType] = useState("ul");

  const add = () => {
    const arr = [...todos, value];
    setTodos(arr);
  };

  const setInputValue = (event) => {
    setValue(event.target.value);
  };

  const changeListType = () => {
    const listType = type === "ul" ? "ol" : "ul";
    setType(listType);
  };

  return (
    <>
      <Input value={value} handleOnInput={setInputValue} />
      <Button name="Dodaj" className="add" handleClick={add} />
      <Button name="*" handleClick={changeListType} />
      {type === "ul" ? (
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      ) : (
        <ol>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ol>
      )}
    </>
  );
};

export default Todo;
