const bodyContent = document.body;
const btn = document.querySelector("#btn");
const btnExit = document.querySelector("#btnExit");
console.log(btnExit)

const myRequestFullScreen = (element) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  }
};

const myCancelFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};

btn.addEventListener("click", () => {
  myRequestFullScreen(bodyContent);

});

btnExit.addEventListener("click", () => {
  myCancelFullScreen();
});
