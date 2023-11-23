import { range } from "./range";

const array: number[] = range(1, 11);
const half: number = array.length / 2;
console.log(half);

let bellowHalf = array.filter((v, i) => i < half);
let overHalf = array.filter((v, i) => i >= half);
console.log(bellowHalf, overHalf);
