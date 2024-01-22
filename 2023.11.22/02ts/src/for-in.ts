// for in : 인덱스 값을 찾아올 때

const names = ["jack", "Jane", "May"];
for (let i in names) {
  const name = names[i];
  console.log(`[${i}]: ${name}`);
}

let jack = {
  name: "jack",
  age: 35,
};

for (let i in jack) {
  console.log(`${i}:jack${i}`);
}
