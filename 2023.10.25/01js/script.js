window.onload = function () {
  // 이미지가 5개라서
  const bgCount = 5;
  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  // let randomNumber2 = Math.ciel(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(/2023.10.25/imgs/bg-${randomNumber}.jpg)`
};
// onload 어떤것을 불러오면은 무언가를 새로고침해라
