// 경로값 항상 확인! 연동되는지 Ctrl 클릭
import { Calculator } from "./method-chain";

let calc = new Calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4);

console.log(result);
