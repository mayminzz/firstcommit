// 배열 메서드 (변칙성 메서드: map(), filter() reduce()) 콜백함수를 받는 메서드
// reduce() :누산기 => 누적된 값을 계산할 수 있는 메서드
// 누산기(토탈)에 더할 현재값 (커런트)
// 원리 대상이 되는 누산을 시키고자하는 요소를 개체로 받아 배열을 객체로 받아서 리듀스 = 콜백함수를 받고 매개변수 누산기 자체인 첫번째 매개변수 다음 누산기에 더해줄 커런트값 넘버스 안에 있는 각각의 숫자 초기값을 0으로 설정
// 0 + 1 + 2 + 3 + 4 + 5 모두 더한 값을 result에 할당
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, current) => total + current, 0);
console.log(result);
