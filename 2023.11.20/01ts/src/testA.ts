import { A } from "./A";

// A는 생성자 함수 a 는 A 생성자 함수의 인스턴스 객체
let a: A = new A();
a.method();

// this / class 생성자의 사용목적 / class생성자 함수를 정의한 이후에 어떻게 사용할 수 있는지? => prototype 함수, prototype객체 , intance 객체 이해해야함!!!