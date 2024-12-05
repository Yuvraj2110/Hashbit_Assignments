import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";
import "./style.css";

function Main() {
  const [value, setvalue] = useState("");
  const [result, setresult] = useState("output");

  useEffect(() => {
    const digitDiv = document.getElementById("digits");
    const digitBtns = digitDiv.children;
    for (let i = 0; i < digitBtns.length; i++) {
      digitBtns[i].addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        let v = digitBtns[i].innerText;
        setvalue((prev) => prev + v);
      });
    }
  }, []);
  useEffect(() => {
    try {
      const op = evaluate(value); // Safely evaluate the expression
      setresult(op);
    } catch (error) {
      setresult("Output");
    }
  }, [value]);

  return (
    <>
      <div className="main">
        <div id="display">
          <div id="input">{value}</div>
          <div id="output">{result}</div>
        </div>
        <div id="digits">
          <button>0</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div className="operators">
          <div id="add">
            <button
              onClick={() => {
                setvalue((prev) => prev + "+");
              }}
            >
              ADD
            </button>
          </div>
          <div id="sub">
            <button
              onClick={() => {
                setvalue((prev) => prev + "-");
              }}
            >
              SUB
            </button>
          </div>
          <div id="mul">
            <button
              onClick={() => {
                setvalue((prev) => prev + "*");
              }}
            >
              MUL
            </button>
          </div>
          <div id="div">
            <button
              onClick={() => {
                setvalue((prev) => prev + "/");
              }}
            >
              DIV
            </button>
          </div>
          <div id="clear">
            <button
              onClick={() => {
                setvalue("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
