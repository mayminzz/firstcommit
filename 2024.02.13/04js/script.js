/// 수학객체
const num = 2.1234;
//반올림
const roundNum = Math.round(num);
console.log(roundNum);
//소수점 첫번째를 버리고 싶을 때
const floorNUm = Math.floor(num);
console.log(floorNUm);
//소수점 첫번째를 무조건 올리고 싶을 때
const cielNum = Math.ceil(num);
console.log(cielNum);

// 0 ~ 0.99999999999...까지의 실수를 난수 형태로 생성하고 싶을 때
const randomNum = Math.random();
console.log(randomNum);

//원주율 값을 생성하고자 할 때
const piNum = Math.PI;
console.log(piNum);
