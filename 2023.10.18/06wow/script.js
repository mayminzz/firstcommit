let wow = new WOW(
  {
  boxClass:     'wow',      // default /값받고 싶은 애는 wow라는 클래스를 가지고 있을거야 
  // animateClass: 'animated', // default /css로 만든 애니메이션을 연결하고 싶으면 animated이라는 클래스를 줘라
  offset:       150,          // default / 몇픽셀 정도가 됐을때 wow라는 애니메이션을 실행시킬거냐
  mobile:       true,       // default /모바일에서쓰고 싶으면 트루 아니면 폴스
  live:         true        // default / 지속적으로 반영하고 싶게 해줄거냐 
}
)
wow.init();