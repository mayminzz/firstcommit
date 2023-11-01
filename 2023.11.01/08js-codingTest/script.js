// 연필 한다스 12자루  하생 인당 1자루씩 나눠준다 했을 때
// 필요한 다스 수를 계산하는 프로그램을 작성하세요
let student = parseInt(prompt("학생 수를 입력하세요!"));

let dozen = 12;
let result = Math.ceil(student / dozen);

if (student % dozen === 0) {
  console.log(result);
} else {
  console.log(result);
}
