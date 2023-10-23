/*1. li태그 안에 span p태그로 리스트와 삭제버튼 만들기 밑에 bookList에 넣기
2. 엑스버튼을 누르면 글씨가 사라짐
3. 
 */
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const ul =document.querySelectorAll("#bookList");
// const btn =document.querySelector("#save");

// btn.addEventListener("click", (e) => {
//   e.preventDefault;
//   let li = document.createElement("li");
//   let titleNode = document.createTextNode(title.innerText);
//   console.log(titleNode)
//   let authorText = document.createTextNode(author.innerText);
//   const span = document.createElement("span");
//   span.innerText = "삭제";
//   span.onclick = ()=> {
//     span.addEventListener("click", function() {
//       this.parentNode.remove(this);
//     })
//   }
//   li.appendChild(titleNode);
//   li.appendChild(authorText);
//   li.appendChild(span);

  
  
// })
const form = document.querySelector('form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const ul = document.querySelector('#bookList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  titleInput.value = '';
  authorInput.value = '';

  const newBook = document.createElement('li');
  newBook.innerText = `제목: ${title}, 저자: ${author}`;

  ul.appendChild(newBook);
  
  const delBtn = document.createElement("button");
  delBtn.innerText = "삭제";
  ul.appendChild(delBtn)
  delBtn.onclick = () => {
    delBtn.parentNode.remove();
  }
});



