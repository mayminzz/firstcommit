const items = document.querySelectorAll("article");
for (let item of items) {
  item.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
  item.addEventListener("click", (e) => {
    
  })
}
