import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const Map = ({ maplevel }) => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [locontent, setlocontent] = useState("우리집");
  const data = useSelector((state) => state);
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(33.450701, 126.570667);
  const [markerPositionlat, setmarkerPositionlat] = useState(33.450701);
  const [markerPositionlng, setmarkerPositionlng] = useState(126.570667);
  const markerPosition = new kakao.maps.LatLng(
    markerPositionlat,
    markerPositionlng
  );
  // const geocoder = new kakao.maps.services.Geocoder();

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
    const mapOptions = {
      center: position, // 지도의 중심좌표
      level: maplevel, // 지도의 확대 레벨
    };
    var infowindow = new kakao.maps.InfoWindow({
      position: new kakao.maps.LatLng(markerPositionlat, markerPositionlng),
      content: locontent,
    });
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);

    const marker = new kakao.maps.Marker({ position: markerPosition }); // 마커 생성
    const mymarker = new kakao.maps.Marker({ position: position }); // 마커 생성
    // infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
    // 커스텀 오버레이에 표출될 내용
    const content = `
      <div class="customoverlay">
        <span>내위치</span>
      </div>`;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
    });

    // 마커가 지도 위에 표시되도록 설정

    setTimeout(() => {
      marker.setMap(map);
      infowindow.open(map, marker);
    }, 500);
    mymarker.setMap(map);

    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
      getAddress(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());

      // 마커가 표시될 위치입니다
      setmarkerPositionlat(mouseEvent.latLng.getLat());
      setmarkerPositionlng(mouseEvent.latLng.getLng());
      var geocoder = new kakao.maps.services.Geocoder();

      var coord = new kakao.maps.LatLng(
        mouseEvent.latLng.getLat(),
        mouseEvent.latLng.getLng()
      );
      var callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          setlocontent(result[0].address.address_name);
          dispatch({ type: "SET_LOCATION", maplocation: locontent });
        }
      };

      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    });
  }, []);

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
