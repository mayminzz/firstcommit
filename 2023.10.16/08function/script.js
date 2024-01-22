// 사용자로부터 국어와 수학 점수를 받아서 2개의 과목 평균을 웹브라우저에 출력시켜주는 함수를 선언.실행

// let arrSubject = ["국어", "수학"];
// let result = testAvg(arrSubject);
// function testAvg(arrData) {
//   let sum = 0;
//   for (let i = 0; i < arrData.length; i++) {
//     sum += parseInt(prompt(arrData[i] + `점수는?`));
//   }
//   let avg = sum / arrData.length;
//   return avg;
// }
// document.write(`두 과목의 평균 점수는 ${result}입니다.`)

let arrSubject = ["국어", "수학"];

let result = testAvg(arrSubject);
function testAvg(arrData) {
  let sum =0;
  for (let i =0; i <arrData.length; i++) {
    sum +=parseInt(prompt(arrData[i] + `점수는?`));
  };
  let avg = sum / arrData.length; 
  return avg;
}
document.write(`두 과목의 평균점수는 ${result}입니다.`)
