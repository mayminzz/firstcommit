// 함수컴포넌트
// state: 기본값 store에게 전달 그 state값을 가지고 핵심이됨
// action :액션을 취하면 reducer로 오는데 useDispatch안에 들어온 값을 객체로 받아온다. 그 값으로 state 값을 변화시텨 state 보내줌

const initialState = {
  count: 0,
  id: "",
  password: "",
};
function Reducer(state = initialState, action) {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case "INCREAMENT":
      return { ...state, count: state.count + payload.num };
    case "DECREASEMENT":
      return { ...state, count: state.count - payload.num };
    case "LOGIN":
      return { ...state, id: payload.id, password: payload.password };
    default:
      return { ...state };
  }
}
export default Reducer;

// const initialState = {
//   count: 0,
// };
// function Reducer(state = initialState, action) {
//   if (action.type === "INCREAMENT") {
//     return { ...state, count: state.count + 1 };
//   }
//   return { ...state };
// }
// export default Reducer;
