//SKIN TYPE SECTION
const skinTypeUrl = "../json/skintype.json";
const skinIntro = document.querySelector(".define_skin");
const skinGridMid = document.querySelector(".mid");
const skinGridCom = document.querySelector(".com");
const skinGridOil = document.querySelector(".oil");
const skinGridDry = document.querySelector(".dry");

fetch(skinTypeUrl)
  .then((response) => response.json())
  .then((skinInfo) => {
    let skinHead = `
  <h2>${skinInfo.skinDesc.title}</h2>
  <p>${skinInfo.skinDesc.info}</p>
  `;
    skinIntro.innerHTML = skinHead;

    let skinMid = `
    <h3>${skinInfo.midSkin.name}</h3>
    <p>${skinInfo.midSkin.info}</p>
            <a
              href="https://www.aesop.com/kr/c/skin/normal-skin-type/"
              target="_blank"
              ><button class="mid_rec_btn">
                중성 피부 추천 제품 <span></span>
              </button>
            </a>
    `;
    skinGridMid.innerHTML = skinMid;

    let skinCom = `
    <h3>${skinInfo.combiSkin.name}</h3>
    <p>${skinInfo.combiSkin.info}</p>
            <a
              href="https://www.aesop.com/kr/c/skin/normal-skin-type/"
              target="_blank"
              ><button class="mid_rec_btn">
                복합성 피부 추천 제품 <span></span>
              </button>
            </a>
    `;
    skinGridCom.innerHTML = skinCom;

    let skinOil = `
    <h3>${skinInfo.oilSkin.name}</h3>
    <p>${skinInfo.oilSkin.info}</p>
            <a
              href="https://www.aesop.com/kr/c/skin/normal-skin-type/"
              target="_blank"
              ><button class="mid_rec_btn">
                지성 피부 추천 제품 <span></span>
              </button>
            </a>
    `;
    skinGridOil.innerHTML = skinOil;

    let skinDry = `
    <h3>${skinInfo.drySkin.name}</h3>
    <p>${skinInfo.drySkin.info}</p>
            <a
              href="https://www.aesop.com/kr/c/skin/normal-skin-type/"
              target="_blank"
              ><button class="mid_rec_btn">
                건성 피부 추천 제품 <span></span>
              </button>
            </a>
    `;
    skinGridDry.innerHTML = skinDry;
  });
//SKIN QUIZ
const questions = [
  {
    question: "세안 후 아무것도 바르지 않은 피부 상태를 알려주세요",
    options: [
      "당기고 건조하다",
      "산뜻하고 부드럽다",
      "이마와 코는 유분기가 있지만 볼과 목은 건조하다",
      "번들거리고 유분기가 많다",
    ],
  },
  {
    question: "평소 사진에선 피부가 어떻게 보여지나요",
    options: [
      "피부에서 빛이 나지 않는다",
      "때때로 빛이 난다",
      "자주 빛이 난다",
      "항상 빛이 난다",
    ],
  },
  {
    question: "메이크업 파운데이션 후 2~3시간 후 상태는 어떠한가요",
    options: [
      "각질이 있거나 주름이 진다",
      "매끄럽다",
      "광택이 난다",
      "줄무늬가 있고 반짝거린다",
    ],
  },
  {
    question: "블랙헤드 또는 화이트 헤드가 있나요",
    options: ["없다", "거의 없다", "때때로 있다", "항상 있다"],
  },
  {
    question: "확대 거울을 볼 때 핀 끝 크기 이상의 큰 모공이 있나요",
    options: ["없다", "T존(이마와 코)에만 몇개 있다", "많다", "엄청 많다"],
  },
];

let currentQuestion = 0;
let userAnswers = [];
const resultElement = document.querySelector(".skin_quiz_result");

/* Load question */

const loadQuestion = () => {
  const userQuestion = questions[currentQuestion];
  document.querySelector(".quiz_quest").innerText = userQuestion.question;

  const optionsContainer = document.querySelector("#options");
  optionsContainer.innerHTML = "";

  userQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;

    const activate = () => {
      userAnswers.push(option);

      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        showResult();
      }
    };
    button.addEventListener("click", activate);
    optionsContainer.appendChild(button);
  });
};

function showResult() {
  const result = evaluateResult(userAnswers);
  resultElement.innerHTML = `<br> 당신의 피부타입은: ${result}입니다`;
}

function evaluateResult(userAnswers) {
  const scoring = {
    "당기고 건조하다": 0,
    "산뜻하고 부드럽다": 1,
    "이마와 코는 유분기가 있지만 볼과 목은 건조하다": 2,
    "번들거리고 유분기가 많다": 3,

    "피부에서 빛이 나지 않는다": 0,
    "때때로 빛이 난다": 1,
    "자주 빛이 난다": 2,
    "항상 빛이 난다": 3,

    "각질이 있거나 주름이 진다": 0,
    " 매끄럽다": 1,
    "광택이 난다": 2,
    "줄무늬가 있고 반짝거린다": 3,

    "없다": 0,
    "거의 없다": 1,
    "때때로 있다": 2,
    "항상 있다": 3,

    "없다": 0,
    "T존(이마와 코)에만 몇개 있다": 1,
    " 많다": 2,
    "엄청 많다": 3,
  };

  let totalScore = 0;

  ///배열이 아닌데 for Each?
  userAnswers.forEach((answer) => {
    totalScore += scoring[answer];
    console.log(totalScore)
  });

  if (totalScore <= 2) {
    return "건성";
  }
  else if ( totalScore <= 5) {
    return "중성";
  }
   else if ( totalScore <= 11) {
    return "복합성";
  }
   else if( totalScore <= 15) {
    return "지성";
  }

}
const skinInfoURL = "../json/resultinfo.json";
// console.log(skinInfoURL);
function showResult() {
  const result = evaluateResult(userAnswers);
  resultElement.innerHTML = `<h3> 당신의 피부타입은: ${result}입니다</h3>`;
  // console.log(result);

 
  if (result == "건성") {
    fetch(skinInfoURL)
      .then((response) => response.json())
      .then((json) => {
        let output = "";
        json.forEach((content) => {
          output += `${[content.skintype[3]]}`;
        });
        let contentsP = document.createElement("p")
        resultElement.appendChild(contentsP)
        contentsP.innerText = output;

        let skinBtn = document.createElement("button")
        skinBtn.innerHTML = "추천제품 보러가기 <span></span>"
        resultElement.appendChild(skinBtn)

      
      });
  }
  if (result == "복합성") {
    fetch(skinInfoURL)
      .then((response) => response.json())
      .then((json) => {
        let output = "";
        json.forEach((content) => {
          output += `${[content.skintype[1]]}`;
        });
        let contentsP = document.createElement("p")
        resultElement.appendChild(contentsP)
        contentsP.innerText = output;

        let skinBtn = document.createElement("button")
        skinBtn.innerHTML = "추천제품 보러가기 <span></span>"
        resultElement.appendChild(skinBtn)

      
      });
  }
  if (result == "지성") {
    fetch(skinInfoURL)
      .then((response) => response.json())
      .then((json) => {
        let output = "";
        json.forEach((content) => {
          output += `${[content.skintype[2]]}`;
        });
        let contentsP = document.createElement("p")
        resultElement.appendChild(contentsP)
        contentsP.innerText = output;

        let skinBtn = document.createElement("button")
        skinBtn.innerHTML = "추천제품 보러가기 <span></span>"
        resultElement.appendChild(skinBtn)


      
      });
  }
  if (result == "중성") {
    fetch(skinInfoURL)
      .then((response) => response.json())
      .then((json) => {
        let output = "";
        json.forEach((content) => {
          output += `${[content.skintype[0]]}`;
        });
        let contentsP = document.createElement("p")
        resultElement.appendChild(contentsP)
        contentsP.innerText = output;

        let skinBtn = document.createElement("button")
        skinBtn.innerHTML = "추천제품 보러가기 <span></span>"
        resultElement.appendChild(skinBtn)


      
      });
  }
}
loadQuestion();

// //PRODUCT REC IMAGE
// const skinUrl = "../json/skinrec.json";
// const image1 = document.querySelector(".product_img1");
// const image2 = document.querySelector(".product_img2");
// const image3 = document.querySelector(".product_img3");
// const imgElement = document.createElement("img");

// fetch(skinUrl)
//   .then((reply) => reply.json())
//   .then((prodImg) => {
//     let prod1 = `
//     <img src= ${prodImg.combiOne.image} alt="" />
//     `;
//     image1.innerHTML = prod1;

//     let prod2 = `
//     <img src= ${prodImg.combiTwo.image} alt="" />
//     `;
//     image2.innerHTML = prod2;

//     let prod3 = `
//     <img src= ${prodImg.combiThr.image} alt="" />
//     `;
//     image3.innerHTML = prod3;
//   });

// //PRODUCT REC DESCRIPTION
// const prodOne = document.querySelector("#prodOne");
// const prodTwo = document.querySelector("#prodTwo");
// const prodThr = document.querySelector("#prodThr");

// fetch(skinUrl)
//   .then((response) => response.json())
//   .then((product) => {
//     let output1 = `
//   <h3>${product.combiOne.name}</h3>
//   <p>${product.combiOne.desc}</p>
//   <span>${product.combiOne.price}</span>
//   <div class="prod_btns">
//     <button class="prod">카트 추가</button>
//     <button class="buy">바로 구매</button>
//   </div>
//   `;
//     prodOne.innerHTML = output1;

//     let output2 = `
//   <h3>${product.combiTwo.name}</h3>
//   <p>${product.combiTwo.desc}</p>
//   <span>${product.combiTwo.price}</span>
//   <div class="prod_btns">
//     <button class="prod">카트 추가</button>
//     <button class="buy">바로 구매</button>
//   </div>
//   `;
//     prodTwo.innerHTML = output2;

//     let output3 = `
//   <h3>${product.combiThr.name}</h3>
//   <p>${product.combiThr.desc}</p>
//   <span>${product.combiThr.price}</span>
//   <div class="prod_btns">
//     <button class="prod">카트 추가</button>
//     <button class="buy">바로 구매</button>
//   </div>
//   `;
//     prodThr.innerHTML = output3;
//   })
//   .catch((err) => console.log(err));

