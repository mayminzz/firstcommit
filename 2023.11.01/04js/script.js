// 신청 과목 리스트를 아래 하단 최종신청과목 영역에 출력되도록 해주세요
// 단, 각 멤버들이 중복해서 신청한 값이 존재한다면 1번만 출력되도록 설정

const result = document.querySelector("#result");

let member1 = new Set(["HTML", "CSS"]);
let member2 = new Set(["CSS", "Javascript"]);
let member3 = new Set(["Javascript", "Typescript"]);

const subjects = [...member1, ...member2, ...member3];
console.log(subjects);

const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;

// let d = new Set([a, b, c]);
// console.log(d);
