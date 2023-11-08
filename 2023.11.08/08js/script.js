// 01부터 9까지의 숫자를 콘솔창에 띄워보자

// 1
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 2
// let myNumber = 0;
// while (myNumber < 10) {
//   console.log(myNumber);
//   myNumber += 1; /* = myNumber + 1 */
// }

// continue : :해당 요소를 건너뛰고 이어서 반복문을 실행시키고자 할 때

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// const flgA = true;
// const myFunction = (flgA) => {
//   for (let i = 0; i < 10; i++) {
//     if (flgA === false) {
//       continue;
//     }
//     if (i % 2 === 0) {
//       continue;
//     }
//   }
//   console.log(flgA);
// };
// myFunction(flgA);

// const a = 10;
// const b = 20;

// console.log(a < b);
// console.log(a > b);

// const user = "iPhone";
// const isIos = navigator.userAgent.includes("iPhone");
// console.log(isIos);

// if (isIos) {
//   alert(`어서오세요,  ${user} 유저님 반갑습니다.`);
// } else {
//   alert(`어서오세요, 고객님, 반갑습니다.`);
// }

// const num = Number.MAX_SAFE_INTEGER;
// const num2 = Number.MIN_SAFE_INTEGER;
// console.log(num);
// console.log(num2);

// let user = parseInt(prompt("원하시는 숫자를 입력하세요"));

// if (user !== null || user !== undefined) {
//   if (user < Number.MAX_SAFE_INTEGER) {
//     console.log("A");
//   }
// }


