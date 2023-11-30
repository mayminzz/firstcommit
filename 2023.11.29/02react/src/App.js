import "./App.css";
// import { viewer } from "./components/Viewer";
import { useState, useRef, useEffect } from "react";
import Controller from "./component/Controller";

function App() {
  //홑태그(*싱글태그) :: 여는 태그에 닫는 태그까지 같이 입력한 경우
  //쌍태그(*멀티태그):: 우리가 아는 그거
  // const [count, setCount] = useState(0);
  // const handleSetCount = (value) => {
  //   setCount(count + value);
  // };
  // const [text, setText] = useState("");
  // const handleChangeText = (e) => {
  //   setText(e.target.value);
  // };
  // const didMountRef = useRef(false);
  // useEffect(() => {
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("컴포넌트 업데이트");
  //   }
  // });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
