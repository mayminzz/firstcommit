// 일반 사용자들에게 현재 에러가 발생되었다는 사실 인지시켜줄 필요가 있음
// 예외 조항 처리

// console.log("시작");
// add();
// console.log("...실행중");
// console.log("종료");

// 예외 조항 처리 / 외부에서 가져올때 무조건 사용해야 한다.
try {
  // 실행할 코드 작성
  console.log("시작");
  add(); /*정의가 되어있지 않은 함수*/
  console.log("...실행중");
  //  실제로 에러가 난 구문을 사용자에게 알려주고
} catch (err) {
  // 예외사항이 발생하였을 경우 실행할 코드
  console.log(`오류발생 ${err}`);
  // 일단 종료 시킴
} finally {
  // try문 이후에 실행할 코드 = 예외와 상관없이 무조건 실행
  console.log("종료");
}

// 만약에 개발자가 개발자나름의 에러 메시지를 커스터마이징 하고 싶다면??
// throw문 사용
// finally 생략 가능

let json = '{"grade":3, "age": 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다.";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("일단 종료");
}
