import "./App.css";

function App() {
  return (
    <section className="container rounded-xl overflow-hidden p-5 relative">
      <div className="display">
        <div className="input">0</div>
        <br />
        <div className="output">0</div>
      </div>
      <br />
      <div className="calculator">
        <button className="btn-number" value="7">
          7
        </button>
        <button className="btn-number" value="8">
          8
        </button>
        <button className="btn-number" value="9">
          9
        </button>
        <button className="btn-op">*</button>
        <br />
        <button className="btn-number" value="4">
          4
        </button>
        <button className="btn-number" value="5">
          5
        </button>
        <button className="btn-number" value="6">
          6
        </button>
        <button className="btn-op">/</button>
        <br />
        <button className="btn-number" value="1">
          1
        </button>
        <button className="btn-number" value="2">
          2
        </button>
        <button className="btn-number" value="3">
          3
        </button>
        <button className="btn-op">-</button>
        <br />
        <button className="btn-reload">C</button>
        <button className="btn-number">0</button>
        <button className="btn-equal">=</button>
        <button className="btn-op">+</button>
      </div>
    </section>
  );
}

export default App;
