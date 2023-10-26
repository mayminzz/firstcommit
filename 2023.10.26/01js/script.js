let bag = {
  type: "backpack",
  color: "blue",
  size: 15,
};

// for in문: 객체 안에 담신 key & value 값을 한번에 가지고 오고 싶을 때
for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}

let book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이 책을 구매했습니다.");
  },
};
for (let key in book1) {
  // 키 값만 찾아오려면
  console.log(`${key}`);
}
// 키 값을 배열형태로 매개변수중 키값을 배열형태로 가지고 온다.
let keys = Object.keys(book1);
console.log(keys);
// 키 값을 배열형태로 매개변수중 value값을 배열형태로 가지고 온다.
let values = Object.values(book1);
console.log(`${values}`);

let entries = Object.entries(book1);
console.log(`${entries}`);
