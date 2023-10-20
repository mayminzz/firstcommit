let itemList = [];
let addBtn = document.querySelector("#add");



let addList = (e) => {
  e.preventDefault();
  let item = document.querySelector("#item").value;
  if(item !==null ) {
    itemList.push(item);
    // console.log(itemList);
    document.querySelector("#item").value=""
    // 인력란에 입력을 하고 추가를 누르면 자동으로 인력란내용이 사라진다. 
    document.querySelector("#item").focus();
    // 깜빡 거리게 해줘
  }
  showList();
};

let showList = () => {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
  }
  list += "</ul>";
  document.querySelector("#itemList").innerHTML = list;
  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
};
function removeList () {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
};
// addList는 콜백함수

addBtn.addEventListener("click", addList);

// e는 이벤트의 약자 참조변수 e와 프리벤트를 넣지 않으면 html에 submit타입인 인풋태그를 누르면 text속성을 가지고 있는 인풋테그에 입력한 내용을  서버에 보내려고 하는 애다.
// 근데 지금은 서버가 없고 무력화하게 하는 기본적인 값을 사용하지 못하게 방어하는 해당 요소에 써야한다
