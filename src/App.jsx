/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handlePress = (e) => {
    setResult(result.concat(e.target.value));
  };

  const handleClear = () => setResult("");

  const handleEqual = () => {
    calculate();
  };

  const calculate = () => {
    setResult(eval(result));
  };
  return (
    <section className="container rounded-xl overflow-hidden p-5 relative">
      <div id="display">
        <div className="input">{result}</div>
        <div className="output">{result}</div>
      </div>
      <button
        id="clear"
        className="btn-number"
        value="7"
        type="reset"
        onClick={handleClear}
      >
        C
      </button>
      <div className="calculator">
        <button
          id="seven"
          className="btn-number"
          value="7"
          onClick={handlePress}
        >
          7
        </button>
        <button
          id="eight"
          className="btn-number"
          value="8"
          onClick={handlePress}
        >
          8
        </button>
        <button
          id="nine"
          className="btn-number"
          value="9"
          onClick={handlePress}
        >
          9
        </button>
        <button
          id="multiply"
          className="btn-op"
          value="*"
          onClick={handlePress}
        >
          *
        </button>
        <br />
        <button
          id="four"
          className="btn-number"
          value="4"
          onClick={handlePress}
        >
          4
        </button>
        <button
          id="five"
          className="btn-number"
          value="5"
          onClick={handlePress}
        >
          5
        </button>
        <button id="six" className="btn-number" value="6" onClick={handlePress}>
          6
        </button>
        <button id="divide" className="btn-op" value="/" onClick={handlePress}>
          /
        </button>
        <br />
        <button id="one" className="btn-number" value="1" onClick={handlePress}>
          1
        </button>
        <button id="two" className="btn-number" value="2" onClick={handlePress}>
          2
        </button>
        <button
          id="three"
          className="btn-number"
          value="3"
          onClick={handlePress}
        >
          3
        </button>
        <button
          id="subtract"
          className="btn-op"
          value="-"
          onClick={handlePress}
        >
          -
        </button>
        <br />
        <button id="decimal" className="btn-reload">
          .
        </button>
        <button id="zero" className="btn-number">
          0
        </button>
        <button id="equals" className="btn-equal" onClick={handleEqual}>
          =
        </button>
        <button id="add" className="btn-op" value="+" onClick={handlePress}>
          +
        </button>
      </div>
    </section>
  );
}

export default App;
