// 1. 재생버튼을 클릭했을때, 음원 재생
// 2. 일시정지버튼을 클릭했을 때, 음원 정지
// 3. 재생과 일시정지 버튼은 어떻게 찾아와야 하지?
//    => DOM 안에서 album_song play & pause 정의
//     음원이 하나만 있는 것은 아니다, 사용자는 어떤 음원을         선택할지 알수 없다. => 반복문이 필요하다

const songs = document.querySelectorAll(".albumTable_song");
console.log(songs);

let i = 0;
for (let el of songs) {
  let play = el.querySelector(".fa-play");
  let pause = el.querySelector("fa-pause");
  play.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.currentTarget.closest("td").querySelector("audio").pause();
  });
}
