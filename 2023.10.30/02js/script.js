/*
let vegitable = ["양상추", "토마토", "피클"];
let meat = ["불고기"];

// 합치고 싶다 concat()
let meatBurger = vegitable.concat(meat, "빵");
console.log(meatBurger);
*/

// 배열의 전개연산자
let vegitable = ["양상추", "토마토", "피클"];
let cheese = ["모짜렐라", "슈레드"];
let cheeseBurger = ["빵", ...vegitable, ...cheese];
console.log(cheeseBurger);

// 배열요소를 정렬하는 매서드
let numbers = [6, 9, 3, 21, 18];
console.log(numbers.reverse());

// sort()
let week = ["sun", "mon", "tue"];
let values = [5, 20, 3, 11, 4, 15];
// console.log(values.sort());
// console.log(week.sort());

// ?? 클수록 인덱스값을 1씩 증가시키고 작으면 -1씩 감소 시킨다.
/*
values.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === 0) return 0;
});
*/
values.sort((a, b) => {
  return a - b;
});
console.log(values);
