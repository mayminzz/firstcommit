const btn = document.querySelector(".button");
const rec = document.querySelector(".rectangle");

onclickButton = () => {
  const randomHue = Math.trunc(Math.random() * 321);
  const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
  rec.style.setProperty("--start", randomColorStart)
  rec.style.setProperty("--end", randomColorEnd)
};

btn.addEventListener("click", onclickButton);
