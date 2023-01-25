import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
import Map from "../Component/Map";
import styled from "styled-components";
import Search from "../Component/Search";
import Nav from "../Component/Nav";
import DummyData from "../Asset/DummyData"; //이름 바꾸기
import Reqboxdiv from "../Component/Reqboxdiv";
import PostDetail from "../Component/PostDetail";
import axios from 'axios';

const Maindiv = styled.div`
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  margin: 0px 0px 100px 0px;
`;

const Serachdiv = styled.div`
  background: linear-gradient(
    to top,
    rgba(44, 57, 75, 1),
    rgba(44, 57, 75, 0.8),
    rgba(44, 57, 75, 0.5)
  );
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;

  div1 {
    font-size: 36px;
    font-weight: bold;
    margin: 80px 0px 0px 0px;
  }
  div2 {
    font-size: 32px;
    font-weight: bold;
    margin: 80px 0px 0px 0px;
  }
  div3 {
    font-size: 32px;
    font-weight: medium;
    margin: 30px 0px 25px 0px;
  }
  button {
    border-radius: 25px;
    background-color: #475262;
    width: 330px;
    height: 55px;
    font-size: 25px;
    color: white;
    margin: 30px 0px 0px 0px;
    border: none;
  }
  div {
    input {
      width: 640px;
      height: 60px;
      font-size: 20px;
      font-weight: thin;
      border-radius: 10px;
      text-align: center;
      margin: 30px 0px 0px 0px;
    }
    i {
      position: absolute;
      top: 255px;
      left: 37%;
      color: black;
    }
  }
`;

const Setlocdiv = styled.div`
  display: flex;
  flex-direction: row;
  div {
    font-size: 32px;
    font-weight: bold;
    margin: 25px 0px 25px 50px;
    z-index: "2";
  }
`;
const Mapdiv = styled.div`
  width: 100vw;
  height: 800px;
  border-radius: 30px;
  /* margin: 80px 0px 0px 100px; */
  display: flex;
  justify-content: center;
  margin-top: 50px;
  z-index: "0";
`;

const Reqdiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function MainPage() {
  const [username, setUsername] = useState("");
  const mapRef = useRef(null);
  const [postdeisOpen, setpostdedeisOpen] = useState(false);
  const [data1, setdata1] = useState([]);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isReqVisible, setIsReqVisible] = useState(false);

  /*scroll시 애니메이션 색깔 바뀌는 효과*/
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 1100) {
      setIsReqVisible(true);
    } else {
      setIsReqVisible(false);
    }
    if (scrollPosition > 400 && scrollPosition <= 1900) {
      setIsMapVisible(true);
    } else {
      setIsMapVisible(false);
    }
    console.log(scrollPosition);
  }, [scrollPosition]);
  /**/

  useEffect(() => {
    console.log("Works!before");
    setTimeout(function () {
      console.log("Works!");
      axios
        .get("http://localhost:5500/data/")
        .then(function (response) {
          // response
          setdata1(response.data);
          console.log(response.data); //데이터 전송 성공시
        })
        .catch(function (error) {
          // 오류발생시 실행
        })
        .then(function (response) {
          // 항상 실행
        }); //컴포넌트가 리랜더링 될때마다 실행
    }, 3000);
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        console.log(dummyData);
        setdata1(dummyData);
      });
    };
    getData();
  }, []);

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  function openpostdeModal() {
    setpostdedeisOpen(!postdeisOpen);
  }

  return (
    <>
      <Search />
      <Maindiv>
        <Mapdiv className={`${isMapVisible ? "fade-in" : "fade-out"}`}>
          <Map />
        </Mapdiv>
        <Nav />
        <Reqdiv isReqVisible={isReqVisible}>
          {data1.map((id) => {
            return (
              <Reqboxdiv
                name={id.name}
                img={id.img}
                Date={id.Date}
                Time={id.Time}
                Time_after={id.Time_after}
                Party={id.Party}
                item={id.item}
                Location={id.Location}
                openModal={openpostdeModal}
              />
            );
          })}
        </Reqdiv>
      </Maindiv>
    </>
  );
}

export default MainPage;

const Maindiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 100px 0px;
  padding: 0 40px;
`;

const Mapdiv = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 50px;
  padding: 0 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 2s;
  &.fade-in {
    opacity: 1;
    visibility: visible;
  }
`;
// const Mapdiv = styled.div`
//   width: 100vw;
//   height: 800px;
//   border-radius: 30px;
//   display: flex;
//   justify-content: center;
//   margin-top: 50px;
//   animation: ${({ isMapVisible }) =>
//     isMapVisible ? "fadeInRight 2s" : "fadeOutLeft 2s"};
// `;

const Reqdiv = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  animation: ${({ isReqVisible }) =>
    isReqVisible ? "fadeInLeft 2s" : "fadeOutRight 2s"};
`;

const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;
