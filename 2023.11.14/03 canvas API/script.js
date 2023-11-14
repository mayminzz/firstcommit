const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(50, 50, 100, 50);
ctx.save();

// (X축에 대한 값을 배수(비율), Y축에 대한 값을 2배수)
// (20*3, 2*70, 100*3, 50*2)
// scale이후 값들은 다 이 비율이 적용된다.
ctx.scale(3, 2);
ctx.strokeRect(20, 70, 100, 50);
// 여기까지만 주고 싶고 다른애들은 안주고 싶을 땐
// restore
ctx.restore();
ctx.strokeRect(200, 50, 100, 50);
