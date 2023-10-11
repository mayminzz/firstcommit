/*
1다음 숙사중에서 10보다 큰 숫자만 화면에 출력해보세요.
[1,3,5,7,9,11,15,17,19]
상기 숫자가 배열에 들어가 있다.

1. 반복문 배열 정의 
2. [1,3,5,7,9,11,15,17,19]중에서 10보다 큰 숫자만 number - 10 >=1
*/

//각각의 아이템은 인덱스의 값을 가지고 있음 아이템의 개수
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// // 보통 초기값은 0
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}<br/>`);
//   }
// }
// 나머지가 0이에여
for(let i = 1; i <= 100; i++) {
  if(i % 5 == 0 && i % 7 != 0)  {
    document.write(`<p class='red'>${i}</p>`);
  }else if(i % 7 == 0 && i % 5 != 0) {
    document.write(`<p class='green'>${i}</p>`);
  }else if(i % 7 == 0 && i % 5 == 0) {
    document.write(`<p class='blue'>${i}</p>`);
  }
}