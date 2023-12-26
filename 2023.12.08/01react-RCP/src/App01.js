import React, { useState, useEffect } from "react";
import "./App01.css";

const App01 = () => {
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("useEffect1 Fire");
  }, []);
  useEffect(() => {
    console.log("useEffect2 Fire");
  }, [counter2]);
  let counter = 0;
  const increase = () => {
    counter += 1;
    setCounter2(counter2 + 1);
    // 숫자를 하나씩 증가를 해주길 원함
    console.log(`counter는 ${counter} counter2는 ${counter2}`);
  };
  return (
    <div className="App01">
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>Click</button>
    </div>
  );
};

export default App01;

// 1. 클릭이라는 버튼을 누른다. (*이벤트)
// 2. 위에 있는 숫자가 증가해야한다.
