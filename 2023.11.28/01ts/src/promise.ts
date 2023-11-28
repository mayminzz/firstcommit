// 웹 브라우저는 html, css, js 3가지 언어만 읽고 실행!
// js 프로그래밍 언어를 웹 브라우저에서만 사용하지 않고, 웹 브라우저가 아닌 다른곳에서도 사용할 수 있도록 하기 위해서 태어난 js 런타임(실행환경) => Node.js => Ts, React)

// Node 모듈중 하나, fs = filesystem 약어
// 사용자가 웹페이지에서 특정 버튼 클릭!
// 로컬컴퓨터의 파일 저장공간에 폴더가 생성
// 입력한 특정 데이터를 로컬스토리지 저장
// fetch() => 변수를 전역요소
// 서버(입력값을 => 지역변수)
import { readFileSync, readFile } from "fs";
console.log("read pakage.json using synchronous api...");

const buffer: Buffer = readFileSync("./pakage.json");
console.log(buffer.toString());

// 비동기처리방식으로 pakage.json 파일을 가져온 것
const readFilePromise = (filename: string): Promise<string> => {
  new Promise<string>((resolve, reject) => {
    return readFile(filename, (error: Error, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

(async () => {
  const content = await readFilePromise("./pakage.json");
  console.log("read pakage.json using Promise and async/await...");
  console.log(content);
})();
