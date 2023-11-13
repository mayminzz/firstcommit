async function init() {
  const response = await fetch("../json/home.json");
  const homeContents = await response.json();
  const contentTextBoxes = document.querySelectorAll(".content_text");

  contentTextBoxes.forEach((contentTextBox, index) => {
    let contentText = "";
    const homeContent = homeContents.theAteneum[index];
    contentText += `
            <h6>더 아테네움</h6>
            <h1>${homeContent.theAteneumTitle}</h1>
            <p>${homeContent.theAteneumSummary}</p>
            <a href="#">${homeContent.theAteneumBtn}</a>
        `;

    contentTextBox.innerHTML = contentText;
  });

  const quotationBoxes = document.querySelectorAll(".quotation");

  quotationBoxes.forEach((quotationBox, index) => {
    let quotationText = "";
    const homeContent = homeContents.quote[index];
    quotationText += `
        <div class="quote_text">${homeContent.quoteText}</div>
        <div class="quote_person">${homeContent.quotePerson}</div>
        `;

    quotationBox.innerHTML = quotationText;
  });
}

init();

const videos = document.querySelectorAll("video");
for (let video of videos) {
  video.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  video.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}

// slider
const items = document.querySelector(".items");
const item = items.querySelectorAll(".item");
const itemCount = item.length;
console.log(itemCount);

const slideWidth = 500;
const slideMargin = 50;
let currentIndex = 0;
const prevBtn = document.querySelector("#btright");
const nextBtn = document.querySelector("#btleft");

// // item 너비값 정의
// const updateWidth = () => {
//   let currentSlides = document.querySelectorAll(".item");
//   let newSlideCount = currentSlides.length;
//   let newWidth = `
//   ${(slideWidth + slideMargin) * newSlideCount - slideMargin}px
//   `;
//   items.style.width = newWidth;
//   console.log(newWidth);
// };
// updateWidth();

// const moveSlide = (num) => {
//   items.style.keft = `${num * (slideWidth + slideMargin)}px`;
//   currentIndex = num;
//   console.log(currentIndex, itemCount);
// };
// moveSlide()
const moveSlide = (num) => {
    items.style.left = `${-num * (slideWidth + slideMargin)}px`;
    currentIndex = num;
    console.log(currentIndex, itemCount);
  
    if (currentIndex === itemCount || currentIndex === - itemCount) {
      setTimeout(() => {
        items.classList.remove("animated");
        items.style.left = "0px";
        currentIndex = 0;
      }, 500);
      setTimeout(() => {
        items.classList.add("animated");
      }, 600);
    }
  };

prevBtn.addEventListener("click", () => {
  moveSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  moveSlide(currentIndex + 1);
});
