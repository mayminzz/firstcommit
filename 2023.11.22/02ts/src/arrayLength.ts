// 제네릭 타입 = 종합적 타입 정의
// 종합병원 = general Hospital

// 배열의 타입을 정의할 때, number[]
// 고정타입
// const sample = ["hello", 1, 2, { name: "May" }];
export const arrayLength = <T>(array: T[]): number => {
  return array.length;
};

// const isEmpty = <T>(array: T[]): boolean => {
//   return arrayLength<T>(array) == 0;
// };

export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
