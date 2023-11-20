export type NumberToNumberFunc = (arg0: number) => number;
export const add = (a:number):NumberToNumberFunc => {
  const _add = (b:number): number => {
    return a + b
  }
  return _add;
}

// 위에서 정의한 함수 타입을 타입으로 정의해준거
// add라는 함수는 숫자를 받아 그리고 그 숫자를 받아 반환하는 타입 