const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// destination
ctx.fillStyle = "orange";
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = "xor";
// source-over: source를 위로 올려라
// source-in: 교차가 되어지는 애만 살려라
// source-out: 바깥애들(교차되어지지 않은)애만 살려라
// source-atop:  destination + 교차되는 것 까지 살려라

// destination-over: destination을 위로 올려라
// destination-in: 교차가 되어지는 애만 살려라
// destination-out: 바깥애들(교차되어지지 않은)애만 살려라
// destination-atop:  source + 교차되는 것 까지 살려라

// lighter: 둘다 나타나는데 교차되어지는 부분을 두 색상을 조합한 색상으로 나타내기
// copy: 나중에 작성된 도형만 남는다.
// xor: 교차되어진 부분은 아무색이 없는 투명으로

// source
ctx.fillStyle = "#368";
ctx.beginPath();
ctx.arc(180, 120, 50, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
