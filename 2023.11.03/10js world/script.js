// 공통페이지 :index.html
// 라우팅(페이지 분기페이지 여러 페이지로 쪼개다) 페이지: home.html / game.html / jukebox.html
// 라우팅페이지: home.css / game.css / jukebox.css
// 라우팅페이지: home.js / game.js / jukebox.js

// 리액트 => 각각의 html 페이지, 모든 html의 역할을 해야하는 페이지들을 js => 각 모듈화시켜서 메인 js

// 각 탭을 클릭하면 => 해당 탭에 연관성이 있는 페이지가 나와야 한다.
// 페이지가 나옴과 동시에 오른쪽 탭의 스타일 변경이 되어야 한다.
// 선택된 경우, 배경 컬러가 흰색 & 폰트 컬러는 검정

const menuHome = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menuHome").style = "color: #000; background:#fff"
  document.querySelector("#menuGame").style = "color: #fff; background:#2982b5"
  document.querySelector("#menuJukebox").style =  "color: #fff; background:#2982b5"
};

const menuGame = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menuGame").style = "color: #000; background:#fff"
  document.querySelector("#menuHome").style =  "color: #fff; background:#2982b5"
  document.querySelector("#menuJukebox").style =  "color: #fff; background:#2982b5"
};

const menuJukebox = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menuJukebox").style = "color: #000; background:#fff"
  document.querySelector("#menuHome").style = "color: #fff; background:#2982b5"
  document.querySelector("#menuGame").style = "color: #fff; background:#2982b5"
};

