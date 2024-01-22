let array1: number[] = [1];
let array2: number[] = [2, 3];

// 서로다른 1개 이상의 복수 배열을 하나로 합치는 여러가지 방법들 중 전개연산자
let mergeArray: number[] = [...array1, ...array2];
console.log(mergeArray);
