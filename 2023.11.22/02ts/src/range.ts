// range 함수: 숫자로 구성된 2개의 인자값을 받아서 그 2개의 숫자 사이에 값들을 모두 더한 결과값을 반환하는 함수
// (1,10) => [1,2,3,4,5,6,7,8,9]
export const range = (from: number, to: number): number[] => {
  return from < to ? [from, ...range(from + 1, to)] : [];
};
