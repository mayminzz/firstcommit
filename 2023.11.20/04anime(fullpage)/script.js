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
      console.log(tagName);
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          s_Slider[i].classList.add("on");
          s_Icons[i].classList.add("active");
          Bg.style.backgroundImage = `url(./portfolio/img/sec2_bg_${[i]}.png)`;
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
const sec3 = () => {
  const d0 =
    "M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z";
  const d1 =
    "M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z";
  const d2 =
    "M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z";

  anime({
    targets: ".sec3_svg path",
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    fill: [{ value: "#667eea" }, { value: "#764ba2" }, { value: "#66a6ff" }],
    duration: 3000,
    easing: "easeInOutQuart",
    loop: true,
    direction: "alternate",
  });

  anime({
    targets: "#sec3 h1 span",
    delay: anime.stagger(100),
    opacity: 1,
    translateX: 100,
    easing: "easeOutSine",
  });
};

const staggerWrap = document.querySelector("#sec4 .img_wrap");
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

// for (let i = 0; i < allElem; i++) {
//   const div = document.createElement("div");
//   fragment.appandChild(div);
//   div.className = "tail";
// }
// staggerWrap.appendChild(fragment);

const sec4 = () => {

};

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
