let students = ["Kim", "Lee", "Park"];
// console.log(`현재 students: ${students}`);

// 로컬스토리지에 저장
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}
// console.log(localData);
localData.push("Choi");
console.log(`추가후 students : ${localData}`);

localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("Lee");
// console.log(indexOfValue);
localData.splice(indexOfValue, 1);
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));
localStorage.removeItem("students");


