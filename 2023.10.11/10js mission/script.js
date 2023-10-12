/*
1.사용자로부터 입력한 값을 저장할 변수에 대한 정의
2.소수인지 아닌지 판단할 수 있는 연산 정의
3.해당 연산이 끝났을 때 결과값을 출력할 수 있게 하는 조건문에 대한 정의
*/

const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime;
// 1은 순수 자연수
if (number === 1) {
  document.write(`${number}은 소수도, 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true;
}else {
  for(let i = 2; i < number; i++) {
    if(number % 1 === 0) {
      isPrime = false;
      break;
    }
    else {
      isPrime = true;
    }
  }
}
if(isPrime) {
  document.write(`${number}는 소수입니다.`)
} else {
  document.write(`${number}는 소수가 아닙니다.`)
}

/* number라는 이름으로 상수를 선언할게 "자연수를 입력해주세요"라고 프롬트창으로 사용자한테 물어봐 ㄱ
그리고 isPrime이라고 하는 이름으로 선언해줄건데

만약, 사용자로부터 받은 숫자가 1이라면 웹브라우저화면에 1은 소수도 합성수도 아니다 라는 문구를 띄워줘
그게 아니라면 만약에 사용자로부터 받은 숫자가 2라면 isPrime은 사실이야.
1,2도 아니라면 나머지 숫자를 반복해서 값을 넣어볼게 
초기값으로 인덱스 값은 2부터 시작할거고 인덱스가 사용자로부터 받은 숫자보다 작을거야(왜냐면 )
*/
