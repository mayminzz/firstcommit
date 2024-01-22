let scores = [90, 35, 64, 88, 45, 92];
// scores 라는 배열 안에 아이템들 중 85이상 값만 따로 필터링해서 별도의 변수에 담아놓고 싶다!

// let highScores = scores.filter((score) => score >= 85);
// console.log(highScores);

let highScores = scores.filter((score) => score >= 80);
console.log(highScores);