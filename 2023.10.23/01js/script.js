const selectMenu = document.querySelector("#major");
// console.log(selectMenu);
let displaySelect = () => {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`${selectedText}를 선택했습니다.`);
};
selectMenu.onchange = displaySelect;
// oncjange  앞에 on이 붙으면 이벤트핸들러가 된다. "변경되거든"
