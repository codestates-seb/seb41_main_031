import React, { useEffect, useRef, useState } from "react";
import DummyData from "../Asset/DummyData";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const Map = ({ maplevel }) => {
  const [address, setAddress] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(33.450701, 126.570667);
  const [lat, setlat] = useState(33.450701);
  const [lng, setlng] = useState(126.570667);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: maplevel, // 지도의 확대 레벨
  };

  const imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  const imageSize = new kakao.maps.Size(24, 35);
  const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  const [podata, setpodata] = useState([]);
  // const geocoder = new kakao.maps.services.Geocoder();

  // const getAddress = async (lat, lng) => {
  //   const coord = new kakao.maps.LatLng(lat, lng);
  //   const geocoder = new kakao.maps.services.Geocoder();
  //   geocoder.reverseGeocode(coord, (result, status) => {
  //     if (status === kakao.maps.services.Status.OK) {
  //       setAddress(result[0].address.address_name);
  //     }
  //   });
  // };

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

  // useEffect(() => {
  //   const marker = new kakao.maps.Marker({
  //     map: map,
  //     position: new kakao.maps.LatLng(
  //       parseInt(address.lat),
  //       parseInt(address.lng)
  //     ),
  //     title: address.address,
  //     image: markerImage,
  //   });

  //   marker.setMap(map);
  //   const infoWindow = new kakao.maps.InfoWindow({
  //     content: `<div>${address.address}</div>`,
  //   });
  //   infoWindow.open(map, marker);
  // }, [address]);

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const positions = [
      {
        map: map,
        position: new kakao.maps.LatLng(33.450701, 126.570667),
        title: address.address,
      },
      {
        map: map,
        position: new kakao.maps.LatLng(address.lat, address.lng),
        title: address.address,
      },
    ];

    const addressesWithoutFirst = positions.slice(1);
    // infowindow = new kakao.maps.InfoWindow({ zindex: 1 });
    // 커스텀 오버레이에 표출될 내용
    const content = `
      <div class="customoverlay">
        <span style="border 2px soled black">내위치</span>
      </div>`;

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
    });

    // 마커가 지도 위에 표시되도록 설정
    addressesWithoutFirst.map((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: item.position,
        title: item.item,
      });
      marker.setMap(map);
      const infoWindow = new kakao.maps.InfoWindow({
        content: `<div style="width:200px; text-align :center; color: black; font-size: 7px;">${address.address}</div>`,
      });
      infoWindow.open(map, marker);
    });

    podata && podata.map((item) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(
          parseFloat(item.lat),
          parseFloat(item.lng)
        ),
        title: item.item,
        image: markerImage,
      });
      // console.log(parseFloat(item.lng));
      marker.setMap(map);
    });

    kakao.maps.event.addListener(map, "click", (event) => {
      setlat(event.latLng.getLat());
      setlng(event.latLng.getLng());
      dispatch({ type: "SET_LAT", lat: lat });
      dispatch({ type: "SET_LNG", lng: lng });
    });
  }, [maplevel, address]);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(lat, lng);
    const callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress({
          address: result[0].address.address_name,
          lat: `${lat}`,
          lng: `${lng}`,
        });
        dispatch({ type: "SET_ADDRESS", address: address });
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  }, [lng]);

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
function mapStateToProps(state) {
  return {
    maplevel: state.maplevel,
  };
}

function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
