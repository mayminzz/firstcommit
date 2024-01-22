const cbA = document.querySelector("#cbA");
let log = document.querySelector(".log");
// let checkedA = cbA.checked;

// const cbB = document.querySelector("#cbB");
// let checkedB = cbB.checked;

// console.log('checkedA값', checkedA)
// console.log('checkedB값', checkedB)

cbA.addEventListener("change", (e) => {
  const value = e.target.checked;
  // const log = `체크박스 A는 ${value}로 변경되었습니다.`;
  // log.innerText = log;
  if (value) {
    log.innerText = `체크가 되었습니다.`
  } else {
    log.innerText = `체크가 해제되었습니다.`
  }
});
