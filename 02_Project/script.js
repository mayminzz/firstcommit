
const gnb = document.querySelector(".gnb");
const menu = document.querySelector(".menu");
const trigger = document.querySelector(".trigger");

trigger.onclick = () => {
  trigger.classList.toggle("active");
  menu.classList.toggle("show");
}

const img2 = document.querySelector(".img_2");
const text = document.querySelector(".text");

text.onclick = () => {
  img2.classList.toggle("overImg");
};

// img1.addEventListener("click", ()=> {
//   img2.classList.toggle("overImg")
// })



const myName = document.querySelector("#name");

myName.onclick = () => {
  if(myName.innerText == "권민주") {
    myName.innerText = "KWON MIN JOO"
  } else if(myName.innerText == "KWON MIN JOO") {
    myName.innerText = "권민주"
  }
}