// ======= GiftTop ========
const giftTop = document.querySelector(".gift_top");
window.addEventListener("load", () => {
  giftTop.innerHTML = `<h4>전 구매 무료상품 및 선물포장과 단독 기프트 메시지 카드 혜택을 즐겨보세요.</h4>`;
});

//====== left gnb =======
const headerUrl = "../json/header.json";
fetch(headerUrl)
  .then((response) => response.json())
  .then((json) => {
    let leftOutput = "";
    json.leftNav.forEach((list) => {
      leftOutput += `
      <li class=${list.class}><a href="#">${list.category}</a></li>`;
    });
    const ulGnb = document.createElement("ul");
    const divGnb = document.querySelector(".gnb");
    divGnb.appendChild(ulGnb);
    ulGnb.innerHTML = leftOutput;

    // ====== right Gnb ======
    let rightOutput = "";

    json.rightNav.forEach((list) => {
      rightOutput += `<a href="#">${list.category}</a>`;
    });

    const gnbRight = document.querySelector(".gnb_right");
    gnbRight.innerHTML = rightOutput;

    // const findIcon = document.createElement("a");
    // findIcon.classList.add("finder");
    // json.rightNav.unshift(findIcon);

    // ======== PC nav_detail_list ========
    const gnbBtns = document.querySelectorAll(".gnb ul li");
    const gnbList = document.querySelector("#nav_detail_list");

    // iframe.classList.add("contentiframe");
    // gnbList.appendChild(iframe);

    gnbBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const iframe = document.createElement("iFrame");
        iframe.setAttribute("src", "../html/nav-html/1-index.html");
        iframe.classList.add("contentiframe");
        gnbList.appendChild(iframe);
        iframe.style.width = "100%"
        iframe.style.height = "100%"


        gnbList.classList.toggle("pc_gnb_show");
      });
    });

    // gnbBtns.addEventListener("click", (btn) => {
    //     console.log("click");
    //     // iframe.setAttribute("src", "./nav-html/2-index.html");
    //     // gnbList.classList.toggle("pc_gnb_show");
    //   })

    // ======== mobile Gnb =========

    const modalGnb = document.querySelector("#mobile_gnb_list");
    const modalTopUl = document.createElement("ul");
    modalGnb.appendChild(modalTopUl);
    modalTopUl.classList.add("modal_top_gnb_list");
    modalTopUl.innerHTML = leftOutput;

    const mobileGnbListBottom = document.querySelector(".gnb_list_bottom");
    const modalBottomUl = document.createElement("ul");
    modalBottomUl.classList.add("modal_bottom_mini_list");
    mobileGnbListBottom.appendChild(modalBottomUl);

    let mobileGnbList = "";
    json.mobileGnb.forEach((mg) => {
      mobileGnbList += `
      <li><a href="#">${mg.catagory}</a></li>`;
    });

    modalBottomUl.innerHTML = mobileGnbList;

    // ======== toggle =========
    const newDiv = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    newDiv.classList.add("toggle");
    gnbRight.appendChild(newDiv);
    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    json.rightNav.push(newDiv);

    newDiv.addEventListener("click", () => {
      newDiv.classList.toggle("active");
      modalGnb.classList.toggle("showModalGnb");
      document.querySelector(".container").classList.toggle("removeContainer");
      document.querySelector(".gift_top").classList.toggle("removeGiftTop");
    });
  })
  .catch((err) => console.log(err));

//오른 쪽 작은 문의사항 창
const queryBtn = document.querySelector("#query");
const miniBox = document.querySelector(".mini_ask");

queryBtn.addEventListener("click", () => {
  miniBox.classList.toggle("show");
});

// ========= footer ==========
const footerUrl = "../json/footer.json";

fetch(footerUrl)
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((content) => {
      // output += `
      // <div class="content">
      //   <h3>${titles.title}</h3>
      //   </div>`;
      output += `
      <div class="content">
        <h3>${content.title}</h3>
        <p>
          <span>${[content.subtitle[0]]}</span>
          <span>${[content.subtitle[1]]}</span>
          <span>${[content.subtitle[2]]}</span>
          <span>${[content.subtitle[3]]}</span>
        </p>
      </div>"`;
    });
    const contents = document.querySelector(".contents");
    contents.innerHTML = output;
  });
