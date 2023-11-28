type func1 = () => string;
// const makeNames:func1 = ():string => {
//   return 'Hello'
// };

// 함수 시그니처 타입을 정의하려면?
const makeNames = (): (() => string) => {
  const names = ["Jack", "Jane", "Smith"];
  let index = 0;
  return (): string => {
    if (index === names.length) {
      index = 0;
    }
    return names[index++];
  };
};

const arr = [1, 2, 3, 4, 5, 6];
const makeName: () => string = makeNames();
console.log(arr.map((n) => makeName()));
