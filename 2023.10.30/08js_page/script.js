const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
console.log(lists);
const deg = 45;

let i = 0;
for (let el of lists) {
  let pic = el.querySelector(".pic");
  console.log(pic);
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.background = `url("./img/member${i + 1}.jpg")`;
  i++;
}
