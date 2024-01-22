import { range } from "./range";

const array: number[] = range(1, 11);
// 마지막 숫자보다 하나 적은 숫자까지 실행이 된다. 재귀함수이기 때문에 자신이 한번더
let odds: number[] = array.filter((value) => value % 2 != 0);
let evens: number[] = array.filter((value) => value % 2 == 0);
console.log(odds, evens);
