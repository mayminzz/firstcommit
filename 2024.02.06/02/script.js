const orderBtn = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container h2");

orderBtn.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(
      title.innerText + "이 당일배송됩니다."
    );
    const newImg = document.createElement("img");
    const srcNode = document.createAttribute("src");
    srcNode.value = "./nike.jpeg";
    newImg.setAttributeNode(srcNode);

    newP.appendChild(textNode);
    orderInfo.appendChild(newImg);
    newImg.style.width = "150px";
    orderInfo.appendChild(newP);
  },
  { once: true }
);
//  { once: true } optional한 매개변수!! 한번만 사용
