// 대수타입 => 타입의 교집합, 합집합

// 숫자 또는 문자를 다받을 수 있다!
type NumberString = number | string;
let ns: NumberString = 1;
ns = "hello";
