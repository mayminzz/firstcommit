const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, "crimson");
linGrad.addColorStop(0.5, "pink");
linGrad.addColorStop(1, "#fff");

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);
