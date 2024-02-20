const bodyTag = document.querySelector("body");

window.onload = () => {
  const bgCount = 5;

  let randomNum = Math.floor(Math.random() * bgCount) + 1;
  bodyTag.style.background  = `url(./img/bg-${randomNum}.jpg)`
};
