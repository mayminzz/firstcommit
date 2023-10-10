// 알고리즘 생각하는 순서
/*
1. 사용자가 입력한 원래가격 값에 대한 정의 
2. 사용자가 입력한 할인률 값에 대한 정의 
3. 출력해야하는 문자의 위치에 대한 정의
4. 계산하기 버튼을 클릭했을때의 이벤트 기능 정의 
*/

function showPrice() {
  let originPrice = document.querySelector("#oprice").value;
  console.log(originPrice);
  let rate = document.querySelector("#rate").value;
  console.log(rate);
  let savedPrice = originPrice * (rate / 100);
  console.log(savedPrice);
  let resultPrice = originPrice - savedPrice;
  console.log(resultPrice);
  document.querySelector(
    "#showResult"
  ).innerHTML = `상품의 원래가격은 ${originPrice}원 이고, 할인률은 ${rate}% 입니다. ${savedPrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.`;
}
