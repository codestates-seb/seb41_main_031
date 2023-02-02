import React, { useEffect, useRef, useState } from "react";
import DummyData from "../Asset/DummyData";
import { useSelector, useDispatch } from "react-redux";

const Map = () => {
  const data = useSelector((state) => state);
  const mapContainer = useRef(null);
  const { kakao } = window;

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  const [podata, setpodata] = useState([]);
  useEffect(() => {
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        console.log(dummyData);
        setpodata(dummyData);
      });
    };
    getData();
  }, []);

  const filteredData = podata.filter((item) => item.postId === data.postId);
  let position = {};
  filteredData.map((item) => {
    position = new kakao.maps.LatLng(
      parseFloat(item.lat),
      parseFloat(item.lng)
    );
  });

  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 4, // 지도의 확대 레벨
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const marker = new kakao.maps.Marker({ position }); // 마커 생성

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
  }, []);

  return (
    <>
      <div
        id="map"
        ref={mapContainer}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        }}
      ></div>
    </>
  );
};

export default Map;
