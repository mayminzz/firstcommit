// map & set
// js베열을 주로 언제, 왜 사용했는가? => 복수의 값을 하나로 묶어서 반복 및 규칙적인 패턴에 의해서 처리하고자 할 때 배열을 사용

let array = [1, 2, 3, 4, 5];

let obj = {
  title: "test",
  author: "Kwon",
  read: function() {
    console.log(`${title}`)
  }
}

// 객체가 할 수 있는 기능을 배열에게도 부여해주고 싶었던 것 +@ 객체가 하지 못하는 기능을 배열에게 주고자 하는 목적

let bag = new Map();
console.log(bag);

bag.set("color", "red");
console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["haveHandle", "true"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);
console.log(myCup);

// 한개의 동일한 객체를 중심으로 해당 객체에 다양한 메서드를 붙여서 사용하고자 할 때 마치 자전거 체인과 같은 모양을 띄고있다. => 메서드 체이닝 기법 (method chaining)
// set() key, value 추가할 때
// myCup.set("type", "mini");
// myCup.set("perpose", "daily");
myCup.set("type", "mini").set("perpose", "daily");
console.log(myCup);
// item 개수를 확인할때 .size
console.log(myCup.size);
// myCup에 color에 매칭되는 value값을 찾아와주세요
console.log(myCup.get("color"));
// myCup에 color라는 key가 있니??
console.log(myCup.has("color"));
// 특정 property를 삭제하고자 할때있으면 true 없으면 false
console.log(myCup.delete("color"));
// reset 싹다 삭제
// console.log(myCup.clear());
// console.log(myCup);
// 키를 찾아오는 방법
console.log(myCup.keys());

// for문을 이용해서 키를 찾아오는 방법
for (let key of myCup.keys()) {
  console.log(key);
}
// value값만 찾아온다. 
for (let value of myCup.values()) {
  console.log(value);
}
// entry를 찾아온다.
for ( let entry of myCup.entries()) {
  console.log(entry);
}

