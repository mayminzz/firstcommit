// 이러한 콜백지옥을 해소하기 위해서 나온 것이 JS의 promise 객체!
// => 만약에 이러한 함수가 실행되면 이러한 값을 출력해줄게 하고 약속을 하는 것!
// => 해결방안을 바로 알 수 있다

// JS 프로미스 객체(내장객체)
// Date, Array, Object
// 콜백함수를 받는데 resolve, reject 라는 매개변수를 받고 얘네는 함수이다.


let likepizza = false;

const pizza = new Promise((resolve, reject) => {
if(likepizza) {
  resolve("피자를 주문합니다.")
} else {
  reject("피자를 주문하지 않습니다.")
}
})

pizza
.then((result) => console.log(result))
.catch((err) => console.log(err))
.finally(() => {
  console.log("완료") 
})