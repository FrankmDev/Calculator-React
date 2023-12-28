import "./App.css";

const Button = ({ key, value }) => {
  return (
    <button type="button" className="btn" id={key}>
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
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];

  const ops = ["/", "*", "-", "+"];

  return (
    <main className="container">
      <section id="display">
        <div className="input">0</div>
        <div className="output">0</div>
      </section>
      <section id="calculator">
        <Button key={"C"} value={"C"} />
        <div className="numbers">
          {numbers.map((num, index) => (
            <Button key={index} value={num} />
          ))}
        </div>
        <div className="operators">
          {ops.map((elem, index) => (
            <Operator key={index} type={elem} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
