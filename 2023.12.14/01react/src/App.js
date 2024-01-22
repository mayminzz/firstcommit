import "./App.css";
import Box from "./Box";
// 액션의 값을 전달하는 애: useDispatch
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const increase = () => {
    dispatch({ type: "INCREAMENT", payload: { num: 1 } });
  };
  const show = () => {
    dispatch({ type: "LOGIN", payload: { id: "minju", password: "123" } });
  };
  const decrease = () => {
    dispatch({ type: "DECREASEMENT", payload: { num: 1 } });
  };
  return (
    <div className="App">
      <h1>
        {id} {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={show}>Login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;

// import "./App.css";
// // 액션의 값을 전달하는 애: useDispatch
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.count);
//   const increase = () => {
//     dispatch({ type: "INCREAMENT" });
//   };
//   return (
//     <div className="App">
//       <h2>{count}</h2>
//       <button onClick={increase}>Click</button>
//     </div>
//   );
// }

// export default App;
