let xhr = new XMLHttpRequest();

xhr.open("GET", "student-3.json", true);
// console.log(iu);
xhr.send();
// console.log(iu2);
// console.log(xhr);


// 제이슨에 있는 것들을 배열형태로 만들어서 for of문을 쓴다.
let renderHTML = (contents) => {
  let output = "";
  for(let content of contents) {
    output+=`
  <h2>${content.name}</h2>
  <ul>
  <li>히트곡 : ${content.music}</li>
  <li>나이 : ${content.year}</li>
  </ul>`;
  }
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let iu = JSON.parse(xhr.responseText);
    renderHTML(iu);
  }
};


