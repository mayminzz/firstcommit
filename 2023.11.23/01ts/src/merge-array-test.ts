import { mergeArray } from "./merge-array";

const mergeArray1 = mergeArray(["hello"], ["world"]);
console.log(mergeArray1);

const mergeArray2 = mergeArray([1], [2,3], [4,5,6],[7,8,9,10])
console.log(mergeArray2);