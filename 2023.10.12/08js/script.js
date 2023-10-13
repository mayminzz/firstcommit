// 문자열 객체
let t = "Hello Thank you good luck to you";
document.write(t, "<br/>");

document.write(t.charAt(16)), "<br/>";
document.write(t.indexOf("you"), "<br/>");
// // 첫번째 매개변수인 you 16 뒤중에서you는 몇번째 인덱스값이냐
document.write(t.indexOf("you", 16), "<br/>");
// // 뒤에서부터 31부터 시작 29번째에서 you 시작
document.write(t.lastIndexOf("you"), "<br/>");
// // indexof you와 같은 값
document.write(t.lastIndexOf("you", 25), "<br/>");
document.write(t.match("luck"), "<br/>");
// // 럭이라는 인덱스가 시작하는 번쨰
document.write(t.search("luck", 21), "<br/>");
// // 21번쨰 인덱스부터 4개의 인덱스
document.write(t.substr(21, 4), "<br/>");
// // 6부터 12인덱스 이전앞까지 슬라이스랑 비슷
document.write(t.substring(6, 12), "<br/>");
// // 제일 먼저 있는 you를 me로 바꿔줘 오는 요소를 바꿔줘
document.write(t.replace("you", "me"), "<br/>");
// // 소문자
// // // 대문자
document.write(t.toUpperCase(), "<br/>");
// // 문자열의 총 개수?
document.write(t.length, "<br/>");

// // 가운데 공백이 있느 ㄴ문자를 주고싶은 것 공백을 중심으로 문자열을 나눠서 배열로
let s = t.split(" ");
console.log(s);
document.write(s[0], "<br/>");
document.write(s[4], "<br/>");

// // 아스키코드표로 로그인시 특정 문자 못쓰게 하고 싶을때  못쓰게 막을 수 있음
let str = "A";
let k = str.charCodeAt(0);
document.write(k); 
