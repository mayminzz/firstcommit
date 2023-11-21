const userDataList = [
  { id: 123, name: "아이유" },
  { id: 456, name: "태연" },
  { id: 789, name: "조인성" },
];

const searchIdInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");


const findUser = (searchId) => {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData === null) {
    searchResult.innerText = "유저 검색 결과 없음";
    return;
  }
  searchResult.innerText = targetData.name;
};

// input태그에 들어오는 value값은 전부 string(문자열)
searchIdInput.addEventListener("keyup", (e) => {
  // 입력된 값을 찾아주겠다는 의미
  const searchId = Number(e.target.value);
  // console.log(typeof(searchId));
  findUser(searchId);
});
