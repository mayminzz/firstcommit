// 오름차순과 내림차순
// sort(); => 정렬하고자 하는 아이켐의 첫번째 요소를 기준으로 정렬을 한다. 정렬기준: 숫자가 아닌 아스키 문자 형식을 기준

// const number01 = [10, 3, 8, 4, 1];
// number01.sort();
// console.log(number01);

// // 오름차순
// const number02 = [10, 3, 8, 4, 1];
// const compare02 = (a, b) => {
//   return a - b;
// };
// number02.sort(compare02);
// console.log(number02);

// // 내림차순
// const number03 = [10, 3, 8, 4, 1];
// const compare03 = (a, b) => {
//   return b - a;
// };
// number03.sort(compare03);
// console.log(number03);

const userDataList = [
  { id: 2, name: "민주" },
  { id: 10, name: "영은" },
  { id: 4, name: "나은" },
  { id: 29, name: "주현" },
  { id: 101, name: "지혜" },
];

const ascending = document.querySelector(".ascending");
const descending = document.querySelector(".descending");
const userList = document.querySelector(".user_list");

const updateList = () => {
  let listHtml = "";
  for (let data of userDataList) {
    listHtml += `
    <li>${data.id} : ${data.name}</li>
    `;
  }
  userList.innerHTML = listHtml;
};

const sortByAscending = () => {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });
};
const sortByDescending = () => {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
};
ascending.addEventListener("click", () => {
  sortByAscending();
});
descending.addEventListener("click", () => {
  sortByDescending();
});
