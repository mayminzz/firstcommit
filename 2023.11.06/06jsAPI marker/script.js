// 카카오맵을 활용해서 우리의 위치를 파악해보자!
// 카카오맵을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자.

// https://github.com/public-apis/public-apis
// https://apis.map.kakao.com

const lat = 37.5025398;
const lng = 127.0248679;

let container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커가 표시될 위치 정의
let markerPosition = new kakao.maps.LatLng(lat, lng);

// 마커 생성하기
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

// 지도 위에 마커 출력하기
marker.setMap(map);

let iwContent = `<div><a heref="https://gn.ezenac.co.kr/" target="blank">이젠아카데미 강남점</a></div>`;
let iwRemovable = true;

let infowindow = new kakao.maps.InfoWindow({
  //마커를 클릭했을 때 표시될 정보 창의 내용
  content: iwContent,
  // 정보창을 닫을 수 있는지에 대한 여부
  removable: iwRemovable,
});

// 마커 클릭시 출력되는 이벤트 정의
kakao.maps.event.addListener(marker, "click", () => {
  infowindow.open(map, marker);
});
