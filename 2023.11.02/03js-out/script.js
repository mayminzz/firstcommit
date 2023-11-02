// json
/* https://jsonplaceholder.typicode.com/users  */

let student = {
  name: "슛돌이",
  major: "체육교육학과",
  grade: 2,
};

// 객체를 제이슨으로
let json = JSON.stringify(student);
console.log(json);

let member = '{"name": "영심이","age" : 20,"hobby" : "swimming"}';
console.log(member);

// 제이슨을 객체로
let member_obj = JSON.parse(member);
console.log(member_obj);

// 클라이언트가 서버에 존재하는 json 데이터를 가져오는 방법
// AJAX방법
// Asynchronous Javascript And XML
// Asynchronous: 비동기

// 비동기: 주문을 할때 먼저온사람 거를 처리 하는데 두번째 세번째 사람이 와도 주문을 할 수 있다.

// 동기 : 앞사람 커피가 완료될 때까지 주문조차 할 수 없음
//svg : xml 문법

// 내부 API 객체를 활용해서 AJAX방식으로
// 클라이언트 & 서버가 소통할 수 있음\

// xml
let xhr = new XMLHttpRequest();

// ion 메서드를 활용해서 값을 jsonTest01 넣어부었다.  true 비동기 처리여부
let jsonTest01 = xhr.open("GET", "student.json", true);
console.log(jsonTest01);
// 클라이언트의 요청받은 데이터를 받아서 주었다.
let jsonTest02 = xhr.send();
console.log(jsonTest02);
console.log(xhr);

// readstate
// 0 : 아직 아무런
// 1
// 2
// 3 : 서버에서 자료가 로딩 중인 상태
// 4: 자료처리가 끝나서 서버는 클라이언트에 정상적으로 데이터를 전달했고, 해당 데이터를 웹에서

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log("Success!");
  }
  // parse 제이슨 파일은 객체로 가져오는 변환함수
  let students = JSON.parse(xhr.responseText);
  let result = document.querySelector("#result");
  result.innerText = `${students.name}학생은 ${student.grade}학년입니다.`;
};

