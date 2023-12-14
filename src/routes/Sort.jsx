import { useState, useRef } from "react";
import SortInput from "../components/SortInput";
import SortLabel from "../components/SortLabel";
import SortSort from "../components/SortSort";
import SortResult from "../components/SortResult";
import {
  bubbleSort,
  selectionSort,
} from "../helper_functions/sortingFunctions";

function Sort() {
  const [array, setArray] = useState([]);
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    if (inputRef.current.value === "") return;
    if (
      Number(inputRef.current.value) ||
      Number(inputRef.current.value) === 0
    ) {
      setArray([...array, Number(inputRef.current.value)]);
      inputRef.current.value = "";
    } else {
      return setResult("Add only numbers, please");
    }
  };

  const handleSort = (sortingType) =>
    sortingType === "bubble"
      ? setResult(bubbleSort(array))
      : setResult(selectionSort(array));

  const clear = () => {
    setArray([]);
    setResult([]);
    inputRef.current.value = "";
  };

  return (
    <div className="bubble-selection">
      <div className="app">
        <main className="main">
          <h1>SORT</h1>
          <SortInput
            handleInput={handleInput}
            inputRef={inputRef}
            clear={clear}
          />
          <SortLabel array={array} />
          <SortSort handleSort={handleSort} />
          <SortResult result={result} />
        </main>
      </div>
    </div>
  );
}

export default Sort;
