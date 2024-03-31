var mapContainer = document.getElementById("map"); // 지도를 표시할 div
var mapOption = {
  center: new kakao.maps.LatLng(37.48102689959951, 126.8793096449964), // 지도의 중심좌표
  level: 5, // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var imageSrc =
  "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-1024.png"; // 마커이미지의 주소입니다
var imageSize = new kakao.maps.Size(45, 45); // 마커이미지의 크기입니다
var imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
var positions = [
  {
    title: "가맹점",
    content: "<p>정셰프의생돈까스</p>",
    address: "서울 금천구 가산디지털2로 165 백상스타타워2차 1층 104, 104-1호",
    number: "<u>02-838-8384</u>",
    info: "https://place.map.kakao.com/177513382",
    latlng: new kakao.maps.LatLng(37.48250994410519, 126.8775434738376),
  },
  {
    title: "가맹점",
    content: "<p>써브웨이 가산디지털단지점</p>",
    address: "서울 금천구 가산디지털1로 165 가산비지니스센터 102호",
    number: "02-1544-1852",
    info: "https://place.map.kakao.com/2100298067",
    latlng: new kakao.maps.LatLng(37.48018183234124, 126.88116518297036),
  },
  {
    title: "가맹점",
    content: "<p>카페희다 가산디지털단지점</p>",
    address: "서울 금천구 가산디지털2로 101 1층 109호",
    number: "정보가 없습니다.",
    info: "https://place.map.kakao.com/1920385770",
    latlng: new kakao.maps.LatLng(37.47692231136055, 126.87970967674727),
  },
  {
    title: "가맹점",
    content: "<p>유가네닭갈비 가산직영점</p>",
    address: "서울 금천구 가산디지털2로 142-16 1, 2층",
    number: "070-7655-9922",
    info: "https://place.map.kakao.com/1752474780",
    latlng: new kakao.maps.LatLng(37.4802993055305, 126.87972235312387),
  },
];

var markers = []; // 검색 결과 마커를 담을 배열
var infowindows = []; // 마커에 연결된 인포윈도우를 담을 배열

// 마커를 생성하고 지도에 표시하는 함수
function createMarker(position) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: position.latlng,
    image: markerImage,
  });
  markers.push(marker); // 마커를 배열에 추가

  // 마커 클릭 시 인포윈도우 열기
  var infowindow = new kakao.maps.InfoWindow({
    content: position.content,
  });
  infowindows.push(infowindow); // 인포윈도우를 배열에 추가

  // 마커에 mouseout 이벤트 추가
  kakao.maps.event.addListener(marker, "mouseout", function () {
    infowindow.close();
  });

  // 마커 클릭 시 인포윈도우 열기
  kakao.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(map, marker);
  });
}

// 검색창과 검색 결과를 위한 요소들
var searchInput = document.getElementById("searchInput");
var searchResultList = document.getElementById("searchResult");

// 검색 이벤트 처리
searchInput.addEventListener("input", function () {
  var keyword = this.value;
  searchPlaces(keyword);
});

// 장소 검색 함수
function searchPlaces(keyword) {
  // 검색 결과 목록 초기화
  searchResultList.innerHTML = "";

  // 입력된 키워드가 포함된 위치 찾기
  var filteredPositions = positions.filter(function (position) {
    return position.title.includes(keyword);
  });

  // 검색 결과를 지도에 표시
  displayMarkers(filteredPositions);

  // 검색 결과를 목록에 추가
  filteredPositions.forEach(function (position, index) {
    var li = document.createElement("li");
    li.className = "searchList"; //목록묶음

    li.innerHTML =
      "<div class=listitem>" +
      position.content +
      "<span>주소 : " +
      position.address +
      "<br>전화번호 : " +
      position.number +
      "</span><br><a href='" +
      position.info +
      "' target='_blank'>정보보기</a>" +
      "</div>";
    li.onclick = function () {
      // 클릭한 검색 결과의 좌표로 지도 이동
      map.setCenter(position.latlng);
    };
    searchResultList.appendChild(li);
  });
}

// 검색 결과를 지도에 표시하는 함수
function displayMarkers(positions) {
  // 기존 마커와 인포윈도우 제거
  removeMarkers();

  // 검색 결과에 따라 새로운 마커 생성
  positions.forEach(function (position) {
    createMarker(position);
  });
}

// 지도에 표시된 마커와 인포윈도우 제거하는 함수
function removeMarkers() {
  markers.forEach(function (marker) {
    kakao.maps.event.removeListener(marker, "mouseover");
    kakao.maps.event.removeListener(marker, "mouseout");
    marker.setMap(null);
  });
  markers = []; // 배열 비우기

  infowindows.forEach(function (infowindow) {
    infowindow.close();
  });
  infowindows = []; // 배열 비우기
}

// 페이지 로드 시 모든 위치 표시
displayMarkers(positions);
