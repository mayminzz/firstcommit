const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(150, 150, 100, 100);

// 중심축을 먼저 지정을 하고 회전을 시켜야 한다.
ctx.translate(150, 150);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.translate(-150, -150);

ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
ctx.rotate((Math.PI / 180) * 45);
ctx.strokeRect(0, 0, 100, 100);
