const displayDate = document.querySelector("#today");
const displayClock = document.querySelector("#clock");

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();

