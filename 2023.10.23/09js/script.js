
let tsNode = document.createElement("p");
let tsTextNode = document.createTextNode("Typescript");
tsNode.appendChild(tsTextNode);

let basisNode = document.querySelectorAll("p")[2];
document.body.insertBefore(tsNode, basisNode);
// tsNode를 basisNode 앞에 삽입


let heading = document.querySelector("h1");
heading.remove();


const title = document.querySelector("h1");
title.addEventListener("click", () => {
  title.remove();
});




// 현재요소 의 위 상위요소를 불러오고싶을때
// let parent = document.querySelector("h1").parentNode;
// console.log(parent);

//배열안에 하나씩 가져와서 반복문을 돌리는 것 선택된 요소의 부모요소의 자식요소를 지워주는 것 부모를 한번 거치고 자식요소로 this 는 화살표함수에서 못쓴다. 
