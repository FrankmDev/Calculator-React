import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [lastPressed, setLastPressed] = useState("");

  const handleNumber = (value) => {
    setLastPressed("number");
    if (display === "0" || lastPressed === "operator" || lastPressed === "equals") {
      setDisplay(value);
      setEquation(lastPressed === "equals" ? value : equation + value);
    } else {
      setDisplay(display + value);
      setEquation(equation + value);
    }
  };

  const handleOperator = (value) => {
    setLastPressed("operator");
    
    if (value === '-' && (lastPressed === "operator" || equation === "")) {
      // Permitir signo negativo después de otro operador o al inicio
      setDisplay('-');
      setEquation(equation + '-');
    } else if (lastPressed === "operator") {
      // Si el último fue un operador, debemos revisar el caso especial
      const lastChar = equation.slice(-1);
      const secondLastChar = equation.slice(-2, -1);
      
      if (lastChar === '-' && "*/+".includes(secondLastChar)) {
        // Si tenemos algo como "5 * -", y viene otro operador, eliminamos ambos
        setEquation(equation.slice(0, -2) + value);
      } else {
        // Reemplazar el último operador
        setEquation(equation.slice(0, -1) + value);
      }
    } else {
      setEquation(equation + value);
    }
  };

  const handleDecimal = () => {
    setLastPressed("decimal");
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setEquation(equation + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
    setLastPressed("");
  };

  const handleEquals = () => {
    try {
      let evalEquation = equation;
      
      // Limpiar la ecuación de operadores consecutivos inválidos antes de evaluar
      evalEquation = evalEquation.replace(/([+*/])-/g, '$1-1*');
      
      const result = eval(evalEquation);
      setDisplay(String(result));
      setEquation(String(result));
      setLastPressed("equals");
    } catch (error) {
      setDisplay("Error");
      setLastPressed("error");
    }
  };

  return (
    <section className="container rounded-xl overflow-hidden p-5 relative">
      <div id="display">{display}</div>
      <button id="clear" className="btn-number" onClick={handleClear}>
        C
      </button>
      <div className="calculator">
        <button id="seven" className="btn-number" onClick={() => handleNumber("7")}>
          7
        </button>
        <button id="eight" className="btn-number" onClick={() => handleNumber("8")}>
          8
        </button>
        <button id="nine" className="btn-number" onClick={() => handleNumber("9")}>
          9
        </button>
        <button id="multiply" className="btn-op" onClick={() => handleOperator("*")}>
          *
        </button>
        <br />
        <button id="four" className="btn-number" onClick={() => handleNumber("4")}>
          4
        </button>
        <button id="five" className="btn-number" onClick={() => handleNumber("5")}>
          5
        </button>
        <button id="six" className="btn-number" onClick={() => handleNumber("6")}>
          6
        </button>
        <button id="divide" className="btn-op" onClick={() => handleOperator("/")}>
          /
        </button>
        <br />
        <button id="one" className="btn-number" onClick={() => handleNumber("1")}>
          1
        </button>
        <button id="two" className="btn-number" onClick={() => handleNumber("2")}>
          2
        </button>
        <button id="three" className="btn-number" onClick={() => handleNumber("3")}>
          3
        </button>
        <button id="subtract" className="btn-op" onClick={() => handleOperator("-")}>
          -
        </button>
        <br />
        <button id="decimal" className="btn-reload" onClick={handleDecimal}>
          .
        </button>
        <button id="zero" className="btn-number" onClick={() => handleNumber("0")}>
          0
        </button>
        <button id="equals" className="btn-equal" onClick={handleEquals}>
          =
        </button>
        <button id="add" className="btn-op" onClick={() => handleOperator("+")}>
          +
        </button>
      </div>
    </section>
  );
}

export default App;
