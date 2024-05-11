/* eslint-disable no-unused-vars */
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <section className="container rounded-xl overflow-hidden p-5 relative">
      <div id="display">0</div>
      <button id="clear" className="btn-number" type="reset">
        C
      </button>
      <div className="calculator">
        <button id="seven" className="btn-number" value="7">
          7
        </button>
        <button id="eight" className="btn-number" value="8">
          8
        </button>
        <button id="nine" className="btn-number" value="9">
          9
        </button>
        <button id="multiply" className="btn-op" value="*">
          *
        </button>
        <br />
        <button id="four" className="btn-number" value="4">
          4
        </button>
        <button id="five" className="btn-number" value="5">
          5
        </button>
        <button id="six" className="btn-number" value="6">
          6
        </button>
        <button id="divide" className="btn-op" value="/">
          /
        </button>
        <br />
        <button id="one" className="btn-number" value="1">
          1
        </button>
        <button id="two" className="btn-number" value="2">
          2
        </button>
        <button id="three" className="btn-number" value="3">
          3
        </button>
        <button id="subtract" className="btn-op" value="-">
          -
        </button>
        <br />
        <button id="decimal" className="btn-reload" value=".">
          .
        </button>
        <button id="zero" className="btn-number" value="0">
          0
        </button>
        <button id="equals" className="btn-equal" value="=">
          =
        </button>
        <button id="add" className="btn-op" value="+">
          +
        </button>
      </div>
    </section>
  );
}

export default App;
