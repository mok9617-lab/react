import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let colorClass = "";

  if (count > 0) {
    colorClass = "positive";
  } else if (count < 0) {
    colorClass = "negative";
  } else {
    colorClass = "zero";
  }

  return (
    <div className="counter">
      <h1 className={`counat ${colorClass}`}>{count}</h1>
      <div className="buttons">
        <button onClick={() => setCount(count - 1)} disabled={count <= -10}>
          -
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)} disabled={count >= 10}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
