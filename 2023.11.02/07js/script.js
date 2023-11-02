// https://reqres.in/api/products/10

let result = document.querySelector("#result");
let xhr = new XMLHttpRequest();

let url = "https://reqres.in/api/products/10";
console.log(url);

xhr.open("GET", `${url}`, true);
xhr.send();
// console.log(xhr);

// let renderHTML = (product) => {
//   let output = `
//   <ul>
//   <li>상품명: ${product.data.name}</li>
//   <li>생산년도: ${product.data.year}</li>
//   </ul>`;
//   result.innerHTML = output;
// };

xhr.onreadystatechange = function () {
  // 가져와서 완벽한 상태를 이뤘다면
  if (xhr.readyState == 4 && xhr.status == 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML =
    `<p>상품명: ${product.data.name}</p>
    <p>생산년도: ${product.data.year}</p>`;
  }
};
