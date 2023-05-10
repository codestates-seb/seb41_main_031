import React, { useState, useEffect, useRef } from "react";
import "animate.css/animate.min.css";
// import Map from "../Component/Map";
import styled from "styled-components";
import Search from "../Component/Search";
import Nav from "../Component/Nav";
import DummyData from "../Asset/DummyData"; //이름 바꾸기
import Reqboxdiv from "../Component/Reqboxdiv";
import PostDetail from "../Component/PostDetail";

function MainPage() {
  const [username, setUsername] = useState("");
  const mapRef = useRef(null);

  const [postdeisOpen, setpostdedeisOpen] = useState(false);
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
  }, [scrollPosition]);
  /**/
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    console.log(DummyData);
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        setdata1(dummyData);
        console.log(data1);
      });
    };
    getData();
  }, []);

  const handleSearch = (searchValue) => {
    if (searchValue === "축구") {
      setdata1(data1.filter((item) => item.event === "축구"));
    } else if (searchValue === "농구") {
      setdata1(data1.filter((item) => item.event === "농구"));
    } else if (searchValue === "탁구") {
      setdata1(data1.filter((item) => item.event === "탁구"));
    } else if (searchValue === "배구") {
      setdata1(data1.filter((item) => item.event === "배구"));
    } else if (searchValue === "헬스") {
      setdata1(data1.filter((item) => item.event === "헬스"));
    } else if (searchValue === "기타") {
      setdata1(data1.filter((item) => item.event === "기타"));
    } else {
      window.location.replace("/");
    }
  };

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  function openpostdeModal() {
    setpostdedeisOpen(!postdeisOpen);
  }

  return (
    <>
      {postdeisOpen && (
        <ModalBackdrop>
          <PostDetail openModal={openpostdeModal} />
        </ModalBackdrop>
      )}
      <Search handleSearch={handleSearch} />
      <Maindiv>
        <Mapdiv className={`${isMapVisible ? "fade-in" : "fade-out"}`}>
          {/* <Map /> */}
        </Mapdiv>
        <Nav />
        <Reqdiv isReqVisible={isReqVisible}>
          {data1 && data1.map((id) => {
            return (
              <Reqboxdiv
                name={id.name}
                img={id.image}
                Date={id.date}
                Time={id.time}
                Party={id.playerNum}
                item={id.event}
                Location={id.location}
                openModal={openpostdeModal}
                value={id.postId}
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
