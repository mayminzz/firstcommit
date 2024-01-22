"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let address = {
    country: "Korea",
    city: "Seoul",
    address1: "Gangnam-gu",
    address2: "sinsa-dong",
    address3: "789 street",
};
const { country, city, ...detail } = address;
console.log(detail);
// JS 전개연산자를 활용해서 서로다은 배열 혹은 객체값을 하나로 합칠때에도 사용했음
let a = { x: 0 };
let b = { y: 0 };
let coord = { a, b };
console.log(coord);
//# sourceMappingURL=index03.js.map