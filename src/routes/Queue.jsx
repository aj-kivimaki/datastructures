import { useState, useRef } from "react";
import QueueInput from "../components/QueueInput";
import QueueLabel from "../components/QueueLabel";

function Queue() {
  const [array, setArray] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current.value === "") return;
    const newArray = [...array];
    newArray.unshift(inputRef.current.value);
    setArray(newArray);
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
    <div className="queue">
      <div className="app">
        <main className="main">
          <h1>QUEUE →</h1>
          <QueueInput
            handleInput={handleInput}
            handleRemove={handleRemove}
            handleClear={clear}
            inputRef={inputRef}
          />
          <QueueLabel array={array} />
        </main>
      </div>
    </div>
  );
}

export default Queue;
