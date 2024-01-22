/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleNumberClick = (value) => {
    setInput((prevInput) => {
      return prevInput === "0" ? value : prevInput + value;
    });
    setResult("");
  };

  const handleOperatorClick = (operator) => {
    setInput((prevInput) => {
      return result ? result + operator : prevInput + operator;
    });
  };

  const handleDecimalClick = () => {
    setInput((prevInput) => {
      return prevInput.includes(".") ? prevInput : prevInput + ".";
    });
  };

  const handleClear = () => {
    setInput("0");
    setResult("");
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <section className="container rounded-xl overflow-hidden p-5 relative">
      <div id="display">{result || input}</div>
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
          onClick={handleNumberClick}
        >
          7
        </button>
        <button
          id="eight"
          className="btn-number"
          value="8"
          onClick={handleNumberClick}
        >
          8
        </button>
        <button
          id="nine"
          className="btn-number"
          value="9"
          onClick={handleNumberClick}
        >
          9
        </button>
        <button
          id="multiply"
          className="btn-op"
          value="*"
          onClick={handleOperatorClick}
        >
          *
        </button>
        <br />
        <button
          id="four"
          className="btn-number"
          value="4"
          onClick={handleNumberClick}
        >
          4
        </button>
        <button
          id="five"
          className="btn-number"
          value="5"
          onClick={handleNumberClick}
        >
          5
        </button>
        <button
          id="six"
          className="btn-number"
          value="6"
          onClick={handleNumberClick}
        >
          6
        </button>
        <button
          id="divide"
          className="btn-op"
          value="/"
          onClick={handleOperatorClick}
        >
          /
        </button>
        <br />
        <button
          id="one"
          className="btn-number"
          value="1"
          onClick={handleNumberClick}
        >
          1
        </button>
        <button
          id="two"
          className="btn-number"
          value="2"
          onClick={handleNumberClick}
        >
          2
        </button>
        <button
          id="three"
          className="btn-number"
          value="3"
          onClick={handleNumberClick}
        >
          3
        </button>
        <button
          id="subtract"
          className="btn-op"
          value="-"
          onClick={handleOperatorClick}
        >
          -
        </button>
        <br />
        <button
          id="decimal"
          className="btn-reload"
          value="."
          onClick={handleDecimalClick}
        >
          .
        </button>
        <button
          id="zero"
          className="btn-number"
          value="0"
          onClick={handleNumberClick}
        >
          0
        </button>
        <button
          id="equals"
          className="btn-equal"
          onClick={handleEqual}
          value="="
        >
          =
        </button>
        <button
          id="add"
          className="btn-op"
          value="+"
          onClick={handleOperatorClick}
        >
          +
        </button>
      </div>
    </section>
  );
}

export default App;
