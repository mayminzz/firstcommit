// 사용자로부터 특정 문자열을 받으세요
// 특정 문자열 안에 속해 있는 특정 단어를 받으세요!
// 그리고 해당 문자열에서 특정단어가 몇번 사용되었는지
// 가나다라마바사아가
// 그리고 해당 문자열에서 특정 단어가 몇번 사용되었는지를 사용자에게 알려주는 알림창을 만들어보세요'
// length 전체 문자열이 몇개로 구성되어 있는지 알수 있음 반복문을 활용 문자열 안에 어떤 잔어를 확인 할 수 있다.

const string = prompt("문장을 입력해주세요!");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

let counting = (str, ch) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }
  return count;
};

const result = counting(string, letter);
alert(`${string}에는 ${letter}(이)가 ${result}개 있습니다.`);
