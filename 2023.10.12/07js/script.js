/*// 배열객체 => 내장 메서드
let arr_1 = ["사당", "교대", "방배", "강남"];
let arr_2 = ["신사", "압구정", "옥수"];

document.write(arr_1, "<br/>");
document.write(arr_2, "<br/>");

// 각각의 아이템을 부분자로 넣어준다. 전화번호 - 숫자만 입렫해도
let result = arr_1.join("-");
document.write(result, "<br/>");

// 서로다은 배열을 한묶음으로 묶는다.
result = arr_1.concat(arr_2);
document.write(result, "<br/>");

// 1번째 인덱스 에서부터 3번인덱스 이전까지!! 그럼 2번까지! 교대 방배 기존에 있는 애들중 뽑아올때 씀
result = arr_1.slice(1, 3);
document.write(result, "<br/>");

// 오름, 내림 차순 정렬 가나다라마바사 최신순, 비싼가격부터정렬 , 싼가격부터 정렬
arr_1.sort();
document.write(arr_1, "<br/>");

// 순서를 바꿔주는 것
arr_2.reverse();
document.write(arr_2, "<br/>"); */

let greenarr = ["교대", "방배", "강남"];
let yellowarr = ["미금", "정자", "수서"];

document.write(greenarr, "<br/>");
document.write(yellowarr, "<br/>");

// 슬라이스랑 비슷한 놈
// 첫번째 매개변수 2번 인덱스부터 시작해라 2번 인덱스 값부터  아이템을 날리고 서초와 역삼을 붙여라
greenarr.splice(2, 1, "서초", "역삼");
document.write(greenarr, "<br/>");

// 해당배열에 가장 뒤에 있는 애를 잘라내기 붙여넣기한게 아니라 나머지 애들은 사라지는 것
let data1 = yellowarr.pop();
document.write(data1, "<br/>");

// 해당배열에 가장 앞에 있는 애를 잘라내기
let data2 = yellowarr.shift();
document.write(data2, "<br/>");

// pop과 정반대 개념// 푸쉬 배열에 맨 뒤쪽에 아이템을 넣는 역할
yellowarr.push(data2);
document.write(yellowarr, "<br/>");

// 맨앞에 아이템을 넣어준것
yellowarr.unshift(data2);
document.write(yellowarr, "<br/>");



