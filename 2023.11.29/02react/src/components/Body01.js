import React, { useState } from "react";

const Viewer = ({ number }) => {
  return (
    <div>{number % 2 === 0 ? <h3>짝수입니다</h3> : <h3>홀수입니다</h3>}</div>
  );
};

const Body01 = () => {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default Body01;
