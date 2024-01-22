import { test01 } from "./test01";
import { test02 } from "./test02";

// 비동기처리방식으로 출력됨 1,hello 1, hello
// test01();
// test02();

// 비동기처리방식의 순서를 정해주고 싶을 때 1, 1, hello, hello 
test01().then(() => test02());
