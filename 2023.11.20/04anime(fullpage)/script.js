const Body = document.querySelector("body");
const Nav_btn = document.querySelector("#nav_icon");

Nav_btn.addEventListener("click", () => {
  Body.classList.toggle("nav_active");
});

// slider
const s_Icons = document.querySelectorAll(".slide_icons");
const s_left = document.querySelector(".slide_btn.left");
const s_right = document.querySelector(".slide_btn.right");
const Bg = document.querySelector("#sec2");
const s_Slider = document.querySelectorAll(".sec2_slider li");

s_Icons.forEach((li) => {
  li.addEventListener("click", (e) => {
    let target = e.target.dataset.index;
    if (li.tagName === "LI") {
      for (let i = 0; i < s_Icons.length; i++) {
        if (target === i) {
          s_Slider[i].classList.add("on");
          s_Icons[i].classList.add("active");
          Bg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${i}.png)`;
        }
      }
    }
  });
});

const sec0 = () => {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    delay: function (el, i) {
      return i * 400;
    },
    direction: "alternate",
    loop: true,
  });
};
const sec1 = () => {
  let tl = anime.timeline({ easing: "linear", duration: 500 });
  tl.add({ targets: ".g01", height: "80%" });
  let tl2 = anime.timeline({ easing: "linear", duration: 500 });
  tl.add({ targets: ".g02", height: "60%" });
  let tl3 = anime.timeline({ easing: "linear", duration: 500 });
  tl.add({ targets: ".g03", height: "90%" });
  let tl4 = anime.timeline({ easing: "linear", duration: 500 });
  tl.add({ targets: ".g04", height: "85%" });
};
const sec1_reset = () => {
  anime({ targets: ".gage_in", height: "0%" });
};
const sec2 = () => {};
const sec3 = () => {};
const sec4 = () => {};

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["num0", "num1", "num2", "num3", "num4"],

  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
  },
});
