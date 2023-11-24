function MyButton(props) {
  // useState 상태 변화: 웹 브라우저 안에 있는 문서에 뭔가 변화가 발생하는 것
  // 첫번 째 변수에는 기본값
  // 두번쨰 변수의 역할은 isClicked라는 첫번째 변수의 값을 변화시킬수 있는 함수
  const [isClicked, setIsClicked] = React.useState(false);
  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked" : "Click here"
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer)