// 문자열에서 사용할 수 있는 다양한 메섣

const t = "Hello Thank you good luck to you";

// charAt() : 매개변수 인덱스 값에 해당하는 문자열을 찾아주는 메서드
console.log(t.charAt(16));

//indexof() : 매개변수 안에 들어온 문자열이 시작되는 인덱스 값을 찾아주는 메서드 => 일치하는 값이 없는 경우 -1 반환
console.log(t.indexOf("you"));

// lastIndexOf() : 뒤에서 부터 찾아주는 메서드
console.log(t.lastIndexOf("you"));

// match() : 찾아옴
console.log(t.match("luck"));

//search() : 왼쪽열부터 일치하는 단어를 찾아서 제일 먼저 일치하는 인덱스값을 찾아주는 메서드 (indexof와 비슷)
console.log(t.search("you"));

// subStr() : 현재 21번쨰 인덱스부터 총 4개의 인덱스 값에 해당하는 문자열을 찾아주는 메서드
console.log(t.substr(21, 4));

//subString() : subStr()의 신문법으로, 6번째 인덱스 값부터 12번째 인덱스 값 이전까지 해당하는 문자열을 찾아주는 메서드
console.log(t.substring(6, 12));

//replace() : 무언가를 대체하다.1번째 매개변수 값을 찾아 2번째 매개변수로 바꿔준다. 좌측부터 1번째로 찾은 you만 찾아서 바꿔주는 메서드
console.log(t.replace("you", "me"));

// toUpperCase() : 대문자를 바꾸어주는 메서드
console.log(t.toUpperCase());

//length : 띄어쓰기까지 포함한 문자열의 길이
console.log(t.length);

// split() : 문자열을 배열로 바꿔주는데 매개변수 안에 들어간 값을 기준으로 나눠서 배열로 만들어준다.
let s = t.split(" ");
console.log(s);
console.log(s[1]);
console.log(s[4]);

// const userName = prompt("당신의 영문 이름은?");
// const upperName = userName.toUpperCase();
// document.write(upperName, "<br/>");

// const userNum = prompt("당신의 연락처는?");
// const result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result);

//사용자가 특정 사이트 회원가입

const userEmail = prompt("당신의 이메일 주소는?");
const arrUrl = [".com", ".co.kr", ".net", ".or.kr", ".go.kr"];

//유효성 검사를 위해 기준값을 정해놓음
let check1 = false;
let check2 = false;

// mayminzz@naver.com
if (userEmail.indexOf("@") > 0) {
  check1 = true;
}

for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}

if (check1 && check2) {
  console.log(userEmail);
} else {
  console.log("이메일 형식이 잘못되었습니다.");
}
