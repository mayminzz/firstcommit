// 올해 연말까지 며칠이 남았는지 확인할 수 있는 계산기
// 1. 현시점의 날짜 정보 필요
// 2. 올해 연말의 날짜 정보가 필요
// 3. 올해 연말의 날짜 정보 - 현시점의 날짜 정보 = 남은 시간

// 현시점의 날짜 정보를 획득
let today = new Date();
let nowYear = today.getFullYear();

// 올해 연말 날짜 정보
let theDate = new Date(nowYear, 11, 31);

//올해 연말 - 현시점의 날짜 정보
let diffDate = theDate.getTime() - today.getTime();

let result =Math.round(diffDate / (24 * 60 * 60 * 1000)) ;
console.log(result);

document.write(`<h1>연말 D-${result}</h1>`);
