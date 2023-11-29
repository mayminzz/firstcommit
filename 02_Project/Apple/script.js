const trigger = document.querySelector(".trigger");
const container = document.querySelector(".container");

trigger.addEventListener("click", () => {
  trigger.classList.toggle("active");
  container.classList.toggle("removeContainer")
});

