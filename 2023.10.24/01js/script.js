const imgBox = document.querySelector("img");


imgBox.addEventListener("mouseover", function () {
  imgBox.src = "./2/pic-2.jpg";
});
imgBox.addEventListener("mouseout", function () {
  imgBox.src = "./2/pic-1.jpg";
});
