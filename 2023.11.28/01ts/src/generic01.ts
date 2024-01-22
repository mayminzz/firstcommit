// 배열의 타입을 정의할 때 제네릭 단어 처음 보았다.
const arr: number[] = [1, 2, 3];
// 배열안에 입력될 아이템의 타입이 미정인 상태에서 배열의 타입을 정의해야하는 경우

const arr01: [number, string, boolean] = [1, "2", true];
const func = <T>(array: T[]) => {};

function g1<T>(a: T): void {
  console.log(`test: ${a}`);
}

function g2<T, Q>(a: T, b: Q) {
  console.log(`test:`);
}
const g3 = <T>(a: T): void => {};
const g4 = <T, Q>(a: T, b: Q) => {};

// 함수의 타입을 정의할 때 함수 시그니처!!
// 함수 시그니처 정의할때 타입별칭 type
type Type1Func = <T>(arg0: T) => void;
// forEach(value, index, array)

type Type2Func = <T, Q>(arg0: T, argu1: Q) => void;
const test02: Type2Func = (a, b) => {};

// type Type3Func = <T, Q, R>(arg0: T, arg1: Q) => R;
// const test03 :Type3Func = ()
