// header toggle 버튼
const gnb = document.querySelector(".gnb");
const menu = document.querySelector(".menu");
const trigger = document.querySelector(".trigger");

trigger.onclick = () => {
    trigger.classList.toggle("active");
    menu.classList.toggle("show");
  }
// timeline 
const img2 = document.querySelector(".img_2");
const btn = document.querySelector(".text");
btn.addEventListener("click", ()=> {
  img2.classList.toggle("overImg")
})



const myName = document.querySelector("#name");

myName.onclick = () => {
  if(myName.innerText == "권민주") {
    myName.innerText = "KWON MIN JOO"
  } else if(myName.innerText == "KWON MIN JOO") {
    myName.innerText = "권민주"
  }
}
const chT = document.querySelector("#changeText");

chT.onclick = () => {
  if(chT.innerText == "CONTACT ME") {
    chT.innerText = "♥ ♡ ♥ ♡"
    chT.style.color = "crimson"
  } else if(chT.innerText == "♥ ♡ ♥ ♡") {
    chT.innerText = "CONTACT ME"
    chT.style.color = "#222"
  }
}

// $(".container").scroll({
//   anchors: ["home1", "about1", "timeline1", "project1", "contact1"],
//   menu: "#topMenu",
// });