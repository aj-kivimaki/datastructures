import { useState, useRef } from "react";
import StackInput from "../components/StackInput";
import StackLabel from "../components/StackLabel";

function Stack() {
  const [array, setArray] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current.value === "") return;
    setArray([...array, inputRef.current.value]);
    inputRef.current.value = "";
  };

  const handleRemove = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };

  const clear = () => {
    setArray([]);
    inputRef.current.value = "";
  };

  return (
    <div className="stack">
      <div className="app">
        <main className="main">
          <h1>STACK</h1>
          <StackInput
            handleInput={handleInput}
            handleRemove={handleRemove}
            handleClear={clear}
            inputRef={inputRef}
          />
          <StackLabel array={array} />
        </main>
      </div>
    </div>
  );
}

export default Stack;
