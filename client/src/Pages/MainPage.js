import React, { useState, useEffect } from "react";
import Map from "../Component/Map";
import styled from "styled-components";
import Postup from "./Postup";
import Nav from "../Component/Nav";
import DummyData from "../Asset/DummyData";
import Reqboxdiv from "../Component/Reqboxdiv";
import PostDetail from "../Component/PostDetail";

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
  const [postisOpen, setpostIsOpen] = useState(false);
  const [postdeisOpen, setpostdedeisOpen] = useState(false);
  const [data1, setdata1] = useState([]);

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  useEffect(() => {
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        console.log(dummyData);
        setdata1(dummyData);
      });
    };
    getData();
  }, []);

  function openpostModal() {
    setpostIsOpen(!postisOpen);
  }
  function openpostdeModal() {
    setpostdedeisOpen(!postdeisOpen);
  }

  return (
    <>
      {postisOpen && (
        <ModalBackdrop onClick={openpostModal}>
          <Postup openModal={openpostModal} />
        </ModalBackdrop>
      )}
      {postdeisOpen && (
        <ModalBackdrop onClick={openpostdeModal}>
          <PostDetail />
        </ModalBackdrop>
      )}

      <Maindiv>
        {console.log(DummyData)}
        <Serachdiv>
          <div1>WHAT’S YOUR FAVORITE SPORT?🔍</div1>
          <div>
            {!postisOpen && !postdeisOpen && (
              <i class="fa-solid fa-magnifying-glass  fa-2x"></i>
            )}
            <input
              type="text"
              name="search"
              placeholder="어떤 운동 하세요?"
              value={username}
              onChange={change}
            />
          </div>
          <div2>🔥Make YOUR TEAM!!🔥</div2>
          <button onClick={openpostModal}>Let’s do It!!!</button>
          <div3>TRY EVERYTHING WITH YOUR TEAM</div3>
        </Serachdiv>
        <Setlocdiv>
          <div>NOW MEETING....</div>
          {!postisOpen && !postdeisOpen && <Nav />}
        </Setlocdiv>

        <Mapdiv>{!postisOpen && !postdeisOpen && <Map />}</Mapdiv>
        <Reqdiv>
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
