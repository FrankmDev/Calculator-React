import "./App.css";

const Button = ({ key, value }) => {
  return (
    <button className="btn" id={key}>
      {value}
    </button>
  );
};
const Operator = ({ key, type }) => {
  return (
    <button className="btn" id={key}>
      {type}
    </button>
  );
};

function App() {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const operators = ["add", "subtract", "multiply", "divide"];

  return (
    <main className="container">
      <section id="display">
        <div className="input">0</div>
        <div className="output">0</div>
      </section>
      <section id="calculator">
        <div className="numbers">
          {numbers.map((num, index) => (
            <Button key={num} value={index} />
          ))}
        </div>
        <div className="operators">
          {operators.map((elem, index) => (
            <Operator key={index} type={elem} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
