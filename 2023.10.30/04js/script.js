// splice() : 배열 내 원하는 위치에 요소를 추가하거나 제거할 때 사용하는 메서드
// 특정 위치부터 끝까지 요소를 제거하고 싶을 때
let subject = ["html", "css", "javascript", "react", "typescript"];
console.log(subject);

// 매개변수(2)의 인덱스부터 다 제거해라
subject.splice(2);
console.log(subject);

// splice() 메서드 안에 매개변수가 2개 일때 어시부터 시작해서 몇개 만큼
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);

// 1번 인덱스 값부터 5개 제거
week.splice(1, 5);
console.log(week);

//slice(): 배열 안에 원하는 위치에 있는 값을 추출하고, 추가하는 메서드 /  원 배열값을 변경시킨다
let color = ["red", "green", "blue", "white", "black"];
console.log(color);

// 2부터 시작해서 끝까지의 요소값을 찾아와라 / 원래 배열값을 변경시키지 않는다.
console.log(color.slice(2));
console.log(color);

// 1번쨰 인덱스부터 시작해서 두번째 배개변수 인덱스 값 바로 앞까지!!!
console.log(color.slice(1, 4));
