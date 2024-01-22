Promise.resolve(1).then((value) => console.log(value));
Promise.resolve("Hello").then((value) => console.log(value));

const array = [1, 2, 3];
Promise.resolve(array).then((value) => console.log(value));

const obj = {
  name: "KWON",
  age: 24,
};
Promise.resolve(obj).then((value) => console.log(value));

