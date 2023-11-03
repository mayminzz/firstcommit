// JS 비동기처리방식 1) 콜백함수, 2)Promise, 3)async, await
// 클라이언트가 서버로부터 값을 요청하고 받아왔던 내장객체
// XMLHttpRequest 내장객체를 활용해서 클라이언트가 서버에 데이터를 요청하고 가져왔다(.open() / .send())

// fetch() 함수 => Promise 객체를 반환한다.
// Promise 객체가 사용할 수 있는 then(), catch()를 fetch()도 사용이 가능하다.

//open, send안써도 됨

// (어디서? 가져올건지)
// fetch("student-2.json").then(console.log);

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json)
    let output = `
  <h1>${json.name}</h1>
    `;
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
