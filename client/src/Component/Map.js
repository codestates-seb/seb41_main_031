import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const Map = ({ maplevel }) => {
  const [address, setAddress] = useState("");
  const data = useSelector((state) => state);
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(33.450701, 126.570667);
  // const geocoder = new kakao.maps.services.Geocoder();
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: maplevel, // 지도의 확대 레벨
  };

  const getAddress = async (lat, lng) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    geocoder.reverseGeocode(coord, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    });
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const marker = new kakao.maps.Marker({ position }); // 마커 생성
    // infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
    // 커스텀 오버레이에 표출될 내용
    const content = `
      <div class="customoverlay">
        <span>포썸</span>
      </div>`;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);

    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
      getAddress(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
      var geocoder = new kakao.maps.services.Geocoder();

      var coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
      var callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          console.log(
            "그런 너를 마주칠까 " + result[0].address.address_name + "을 못가"
          );
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    });
  });

  return (
    <>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: "80%",
          height: "100%",
          borderRadius: "20px",
        }}
      ></div>
      <button onClick={() => getAddress(37.566826, 126.9786567)}>
        Get Address
      </button>
      <div>{address}</div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    maplevel: state.maplevel,
  };
}

function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
