import { useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);

  return (
    <>
      <div className="box">
        <h1>Current Count: {count}</h1>
        <div className="div">
          <button onClick={() => setcount(count + 1)} className="button">
            +1
          </button>
          <button onClick={() => setcount(count - 1)} className="button">
            -1
          </button>
          <button onClick={() => setcount(count + 5)} className="button">
            +5
          </button>
          <button onClick={() => setcount(count - 5)} className="button">
            -5
          </button>
          <button onClick={() => setcount(count + 10)} className="button">
            +10
          </button>
          <button onClick={() => setcount(count - 10)} className="button">
            -10
          </button>
          <span>
            <button
              onClick={() => setcount(count == useState)}
              className="button"
            >
              Reset
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
