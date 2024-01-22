const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "italic 60px Arial"
ctx.fillText("Javascript", 50, 70);
ctx.font = "bold 60px sans-serif"
ctx.strokeText("Javascript", 50, 150);
