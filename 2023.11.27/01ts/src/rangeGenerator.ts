// 생성기 함수
export function* rangeGenerator(from: number, to: number) {
  let value = from;
  while (value < to) {
    yield value;
  }
}
