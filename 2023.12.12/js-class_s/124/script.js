const balloon = document.querySelector("#balloon");
const paragraph = document.querySelector(".paragraph");

const removePopup = () => {
  balloon.classList.remove("on");
};

balloon.addEventListener("click", removePopup);

paragraph.addEventListener("selectstart", () => {
  paragraph.addEventListener(
    "mouseup",
    (event) => {
      const selectionCharacters = window.getSelection().toString();
      console.log(selectionCharacters);

      if (selectionCharacters.length > 0) {
        balloon.innerText = selectionCharacters;
        balloon.classList.add("on");
        balloon.style.left = `${event.clientX - balloon.clientWidth}px`;
        balloon.style.top = `${event.clientY - balloon.clientHeight * 2}px`;
      } else {
        removePopup();
      }
    },
    {
      once: true,
    }
  );
});
