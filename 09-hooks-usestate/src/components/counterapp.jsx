import { useState } from "react";
const CounterApp = () => {
  const [count, setCount] = useState(0);

  function increaseNum() {
    setCount(count + 1);
  }
  function decreaseNum() {
    setCount(count - 1);
  }

  function resetNum() {
    setCount(0);
  }

  function jump() {
    setCount(count + 5);
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
        <button onClick={resetNum}>reset</button>
        <button onClick={jump}>jump</button>
      </div>
    </>
  );
};

export default CounterApp;
