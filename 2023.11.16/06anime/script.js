// stagger : 순차적으로 무언가를 할 때 사용
// anime({
//   targets: "ul li",
//   translateY: 100,
//   // delay: function (el, i) {
//   //   return i * 300;
//   // },
//   delay: anime.stagger(300),
// });

// 짝수 인덱스 값을 갖고 있는 요소들은 및으로 내려오고
// 홀수 인덱스 값을 갖고 있는 요소들은 위로 올라간다면?
const li = document.querySelector("ul li");

anime({
  targets: "ul li",
  translateY: function (el, i) {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity:1
});

// 해당 8개의 도형이 처음엔 안보이다가 전전 갈수록 서서히 나타날 수 있도록 코드를 수정
