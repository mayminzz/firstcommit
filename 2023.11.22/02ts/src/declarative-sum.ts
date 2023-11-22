// 선언형 방식의 코드
import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
let numbers: number[] = range(1, 101);
const idOdd = (n: number): boolean => n % 2 != 0;
const idEven = (n: number): boolean => n % 2 == 0;
let result = fold(filter(numbers, idEven), (result, value) => result + value, 0);


