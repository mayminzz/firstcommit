// const resultBox = document.querySelector(".container");

// let userInfoUrl = "./user.json";

// console.log(userInfoUrl);
// fetch(userInfoUrl)
//   .then((response) => response.json())
//   .then((json) => {
//     let userInfo = "";
//     json.forEach((list) => {
//       userInfo += `
//       <div>
//       <h5>${list.username}</h5>
//       <span>지역 : ${list.local}</span>
//       </div>
//       `;
//     });
//     resultBox.innerHTML = userInfo;
//     const h5El = document.querySelectorAll("h5");
//     const spanEl = document.querySelectorAll("span");
//     const divEl = document.querySelectorAll(".container div");

//     divEl.forEach((div) => {
//       div.style.boxSizing = "border-box"
//       div.style.border="1px solid #fff"
//       div.style.marginRight = "20px"
//       div.style.width = "150px"
//       div.style.height = "100px"
//       div.style.padding = "15px"
//     })
//   });

const userList = [
  { id: 1, name: "곰", address: "서울" },
  { id: 2, name: "여우", address: "대전" },
  { id: 3, name: "사자", address: "부산" },
];

const container = document.querySelector(".container");
userList.forEach((userData) => {
  container.innerHTML += `
  <div class="card">
  <h2>${userData.name}</h2>
  <p> 지역 : ${userData.address}</p>
  </div>
  `
});
