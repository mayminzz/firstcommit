import { printValue, Valuable } from "./printValue";
printValue(new Valuable<number>(1));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>("Hello"));
printValue(new Valuable<number[]>([1, 2, 3]));

// 제네릭 인터페이스를 활용해서 객체의 타입을 정의
// 해당 인터페이스를 가지고, 클래스 생성자를 만들었음
// 함수의 인자값으로 클래그 생성자를 적용해서 바로 객체의 값을 출력하는 구문 완성