import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import useDeeplyCheckedEffect from "./";

function UseEffect({ state }) {
  useEffect(
    () => {
      console.log("useEffect", state);
    },
    [state]
  );

  return <div />;
}

function UseDeeplyCheckedEffect({ state }) {
  useDeeplyCheckedEffect(
    () => {
      console.log("useDeeplyCheckedEffect", state);
    },
    [state]
  );

  return <div />;
}

function App() {
  const [state, setState] = useState({ count: 1 });

  return (
    <div>
      <button
        onClick={() => {
          setState({ ...state, count: state.count });
        }}
      >
        Logs `useEffect`
      </button>
      <button
        onClick={() => {
          setState({ ...state, count: state.count + 1 });
        }}
      >
        Logs both
      </button>
      <UseEffect state={state} />
      <UseDeeplyCheckedEffect state={state} />
    </div>
  );
}

render(<App />, window.root);
