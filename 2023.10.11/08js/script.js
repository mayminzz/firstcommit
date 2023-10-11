// let stars = parseInt(prompt("별의 개수 : ")); 별의 개수 0을 찍으면 실행시키지 않는다

// if (stars !== null && stars !== "") {
//   while (stars > 0) {
//     document.write("*");
//     stars--;
//   }
// }

// 조건값을 체크하기 전에 무관하게 일단 실행시켜 그리고 조건문을 따져보고 실행시킬건지 말지 해
let stars = parseInt(prompt("별의 개수 : "));

if (stars !== null && stars !== "") {
  do {
  document.write("*");
  stars--;
  } while(stars > 0)
}
