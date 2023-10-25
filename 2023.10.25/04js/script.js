const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("#close");

for (let item of items) {
  item.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
  item.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute = ("src", vidSrc);

    aside.classList.add("on");
    aside.querySelector("video").play();
    close.addEventListener("click", (e) => {
      aside.classList.remove("on");
      aside.querySelector("video").pause();
    });
  });
}
