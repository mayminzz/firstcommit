const vegetable = ["양배추", "토마토", "피클"];
const meat = ["불고기"];
const cheese = [" 모빠렐라", "슈레드"];

// 서로다른 배열을 하나로 합쳐주는 메서드 함수

//1. concat() :  매개변수를 복수로 가질 수 있음
// 앞에 있는 배열이 주가 되고 매개변수로 들어온 배열이 서브가 된다. 그리고 마지막에 빵이라는 값이 추가된다.
const meatBugger = vegetable.concat(meat, "빵");
// const meatBugger = meat.concat(vegetable, "빵");
console.log(meatBugger);

// 2. 전개연산자
const cheezeBuger = [...vegetable, ...cheese, ...meat];
console.log(cheezeBuger);

// 3. reverse() : 배열을 거꾸로 가져올 때 사용하는 메서드 함수
const numbers = [3, 6, 9, 21, 18];
console.log(numbers.reverse());

// 4. sort() :한글일 경우 가나다, 영문일 경우 abc 순으로 정렬, 숫자일 경우는 앞글자를 기준으로 1,2,3
const week = ["일", "월", "화", "수", "목", "금", "토"];
const values = [5, 20, 3, 11, 15];

console.log(week.sort());
console.log(values.sort());

// 오름차순
console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if ((a === 0)) return 0;
    return a - b;
  })
);

// 내림차순
console.log(
  values.sort((a, b) => {
    // if (a > b) return 1;
    // if (a < b) return -1;
    // if ((a === 0)) return 0;
    return b - a;
  })
);

//pop() & push() : 배열의 맨 마지막값 => 배열의 원본 데이터갑시 변경
//pop() : 배열의 가장 마지막 값을 삭제
const animals = ["lion", "bear", "rabbit"];
animals.pop();
console.log(animals);

//push() : 배열의 맨 마지막에 값을 추가
animals.push("tiger");
console.log(animals);

//shift() & unshift() :  배열의 첫번째 값

const fruits = ["apple", "pear", "banana"];

// shift() : 배열의 맨 첫번째 값 삭제
fruits.shift();
console.log(fruits);

//unshift() : 배열의 맨 첫번째 값을 추가
fruits.unshift("cherry");
console.log(fruits);

// splice(인덱스, 객수) : 특정 요소의 위치를 찾고자 할 때
// subStr(인덱스, 갯수) => 문자열에서 사용했던 메서드 함수

const week01 = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// 매개변수 2개일 경우 1번째 매개변수 값부터 2번째 매개변수만큼 찾아오기
const weekday = week01.splice(1, 5);
console.log(weekday);

const subjects = ["html", "css", "javascript", "react", "typescript"];
// 2번째 매개변수를 지정해 주지 않는다면 끝까지 가져온다.
const major = subjects.splice(2);
console.log(major);
console.group(subjects);

// slice(인덱스, 인덱스) => 문자열 slice() = subString()과 비슷
// 첫번째 인덱스 값부터 시작해서 두번째 인덱스 값 바로 직전까지
// 배열에서는 slice를 사용할 때 2번째 인자값을 주지 않으면 첫번째 인덱스값부터 마지막 인덱스값까지 찾아온다.

const colors = ["red", "green", "blue", "white", "black"];
// 2번째 인덱스 값부터 끝까지
console.log(colors.slice(2));
console.log(colors);

//splice의 경우, 원본 데이터 배열값 수정 가능 VS slice의 경우, 원본 데이터 배열값 수정 불가능
