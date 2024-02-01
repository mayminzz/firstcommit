const modeBtn = document.querySelector(".mode");
const textBox = document.querySelector(".textBox");
const body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
  modeBtn.classList.toggle("modeDark");
  textBox.classList.toggle("textBoxDark");
  body.classList.toggle("bodyDark");
  if(modeBtn.innerText === "다크모드") {
    modeBtn.innerText = "화이트모드";
  } else {
    modeBtn.innerText = "다크모드"
  }
});
