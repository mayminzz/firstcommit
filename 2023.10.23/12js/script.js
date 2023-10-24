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



