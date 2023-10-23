// const today = new Date();
// const hrs = today.getHours();
// const container = document.querySelector("#container");
// let newImg = document.createElement("img");
// newImg.src = hrs < 12 ? "./morning.jpg" : "./afternoon.jpg";
// container.appendChild(newImg);
const today = new Date();
const hrs = today.getHours();
const container = document.querySelector("#container");
let newImg = document.createElement("img");
newImg.src = hrs < 12 ? "./morning.jpg" : "./afternoon.jpg";
container.appendChild(newImg)