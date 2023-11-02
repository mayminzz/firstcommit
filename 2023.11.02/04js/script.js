// let xhr = new XMLHttpRequest();

// xhr.open("GET", "student-2.json", true);
// // console.log(iu);
// xhr.send();
// // console.log(iu2);
// // console.log(xhr);

// let renderHTML = (contents) => {
//   let output = `
//   <h2>${contents.name}</h2>
//   <ul>
//   <li>히트곡 : ${contents.music}</li>
//   <li>나이 : ${contents.year}</li>
//   </ul>`;
//   document.querySelector("#result").innerHTML = output;

// };

// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let iu = JSON.parse(xhr.responseText);
//     renderHTML(iu);
//   }
// };

let xhr = new XMLHttpRequest();

xhr.open("GET", "student-2.json", true);
xhr.send();

let renderHTML = (contents) => {
  let output = `
  <h1>${contents.name}</h1>
  <ul>
  <li>히트곡 : ${contents.music}</li>
  <li>나이 : ${contents.year}</li>
  </ul>`
  document.querySelector("#result").innerHTML = output
}

xhr.onreadystatechange = () => {
  if(xhr.readyState == 4 && xhr.status == 200) {
    let iu = JSON.parse(xhr.responseText);
    renderHTML(iu)
  }
}