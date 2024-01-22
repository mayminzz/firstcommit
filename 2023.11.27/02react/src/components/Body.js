import React from "react";
import "./Body.css";
function Body(props) {
  console.log(props);
  const { name, location } = props;
  // 지금 작성하고 있는 이 문법이 Jsx
  // React의 출력문에 원시타입 자료는 특정한 제약조건 없이 입출력이 가능하나, 객체 타입 자료는 원천적으로 불가

  // 하지만 객체 안에 있는 key값은 가지고올 수 있다.

  // const strA = "안녕!"
  // const strB = " 민쥬"

  // const objA = {
  //   a: 1,
  //   b: 2,
  // };
  // const num = 19;

  return (
    // // 의미없는 부모태그 React(모듈)
    // <React.Fragment>
    //   <div>div 1</div>
    //   <div>div 2</div>
    // </React.Fragment>

    // <>
    //   <h2>
    //     {num}는 {num % 2 === 0 ? "짝수" : " 홀수"}
    //   </h2>
    // </>

    <div>
      <h1>
        {name}는 {location}에 거주중이다.
      </h1>
    </div>
  );
}
export default Body;
