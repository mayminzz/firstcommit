{
  name: "홍길동";
  major: "컴퓨터 공학";
  grade: 2;
}

// AJAX
// Asynchronous Javascript And XML

// let xhr = new XMLHttpRequest();
// console.log(xhr);

// post 보안을 유지하기 위해서 가져오는 방식
// get(보안에 취약 데이터 가져오는데 효율적) 방식으로 가져오겠다
//true : 비동기 처리로 가져오겠다
// xhr.open("GET", "students.json", true);

// xhr.send();

// readyState : 0부터 시작 1 -> 2 -> 3 -> 4
// 0인 경우 : 아직 클라이언트가 서버측에 아무런 요청을 하지 않은 상태
// 1인 경우 : 클라이언트가 서버로 자료를 요청하고 성공한 상태
// 2인 경우 : 클라이언트가 서버에 자료를 요청한 이후에 서버가 클라이언트에게 응답을 한 상태
// 3인 경우 : 서버가 클라이언트에게 자료를 전송중인 상태
// 4인 경우 : 서버가 클라이언트에게 자료를 모두 전송하고 이제 웹에서 해당 자료를 처리할 수 있게 된 상태

// 이벤트 핸들러 onClick
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let students = JSON.parse(xhr.responseText);
//     document.write(`${students.name}학생은 ${students.grade}학년입니다.`);
//   }
// };

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "students.json", true);
// xhr.send();

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//     <h2>${content.name}</h2>
//     <ul>
//       <li>${content.major}</li>
//       <li>${content.grade}</li>
//     </ul>
//     <hr/>`;
//   }
//   document.write(output);
// };
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let students = JSON.parse(xhr.responseText);
//     console.log(students);
//     renderHTML(students);
//   }
// };

// try {
//   console.log("시작");
//   add();
// } catch(err) {
//   console.log(`오류발생 : ${err}`);
// } finally {
//   console.log("끝")
// }

// let json = '{grade" : 3, "age" : 25}';

// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw "사용자 이름이 없습니다.";
//   }
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("통신종료");
// }

fetch("students.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
    <h2>${student.name}</h2>
    <ul>
      <li>${student.major}</li>
      <li>${student.grade}</li>
    </ul>
    <hr/>
    `;
    });
    document.write(`${output}`);
  });
