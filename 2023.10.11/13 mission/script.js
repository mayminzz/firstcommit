// 중첩 for문을 활용해서 구구단 1~5단까지 화면 출력


// let num = 1;
// let t = `<table border=1>`;
// for (let i = 1; i <= 5; i++) {
//   t += `<tr>`;
//   for (let k = 1; k <= 5; k++) {
//     t += `<td>${num}</td>`;
//     num++;
//   }
//   t +=`</tr>`
// }
// t += `</table>`;
// document.write(t);

let num =1;
let t = `<table border=1>`;
for ( let i =1; i<=5; i++) {
  t+=` <tr>`;
  for(let k=1; k<=5; k++) {
    t+=`<td>${num}</td>`
    num++; 
  }
  t+=`</tr>`
}
t+= `<table>`;
document.write(t);



