import { useState } from "react";

// useState(함수): 상태관리 훅!!!!!!!!
// 함수 1개의 변수, 1개의 함수를 반환
// 1개의 함수: 초기값을 담는 그릇의 역할
// 1개의 함수: 변수 안에 감시는 그 초기값을 변경시키는 역할
// useAtate 함수가 실행되면 배열형태에 담긴다

// count : 초기값 출력
// console.log("update");
// const [count, setCount] = useState(0);
// const onIncrease = () => {
//   setCount(count + 1);
// };
// ★★★console.log("update"); 12이 찍히는 이유?? 6번은 노드

// setname에 value값이 name으로 들어가서 그 name이 value값으로 들어간다.
function Body() {
  const [name, setName] = useState();
  const onChangeName = (e) => {
    setName(e.target.vlaue);
  };

  const [gender, setGender] = useState();
  const onChanGender = (e) => {
    setGender(e.target.vlaue);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select value={gender} onChange={onChanGender}>
          <option key="">-</option>
          <option key="남성">남성</option>
          <option key="여성">여성</option>
        </select>
      </div>
      <div>
        <input type="date" />
      </div>
      <div>
        <textarea />
      </div>
    </div>
  );
}

export default Body;
