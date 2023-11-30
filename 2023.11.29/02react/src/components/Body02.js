import React, { useState, useRef } from "react";

const Body02 = () => {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = (e) => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };
  return (
    <div>
      <input ref={textRef} value={text} onChange={onChangeInput} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
};

export default Body02;
