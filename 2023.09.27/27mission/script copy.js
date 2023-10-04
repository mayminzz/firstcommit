const toggleBtn = document.querySelector(".menu_toggle_btn");
const navigation = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navigation.classList.toggle("active");
});

// 버그가 있는지 잘 나오는지 중간점검
// console.log(toggleBtn);
// null이 나오면 정상

