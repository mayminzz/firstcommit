// 리엑트에서 자주 사용하는 styled-conponent
// 나는 왜 그롣ㅇ안 css?

//  큰 프로젝트에서 헤더/ 바디 / 풋터를 각파일로 만들고 메인 JS에 이렇게 impot해서 가져온다.
// 반대편에서 expot내보내기를 해야함
// import { hello } from "./hello.js";

// 추상클래스
// abstract class AbstractPerson5 {
//   abstract name: string;
//   constructor(public age?: number) {}
// }

// class를 활용해서 프로토타입의 객체를 만든다는 것은 인스턴스 객체를 생성하겠다는 의미
// :void 함수의 반환값이 정의되지 않을 때

abstract class Developer {
  abstract coding(): void;
  drink(): void {
    console.log("drink sth");
  }
}

// const test = new Developer() 추상클래스라서 안됨
class FrontEndDeveloper extends Developer {
  coding(): void {
    console.log("develp web");
  }
  design(): void {
    console.log("design web");
  }
}

const josh = new FrontEndDeveloper();
josh.coding();
