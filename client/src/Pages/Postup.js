import React, { useState } from "react";
import Map from "../Component/Map";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Postup({ openModal }) {
  const data = useSelector((state) => state);
  const sports = ["축구", "배구", "농구", "탁구", "헬스", "기타"];
  const [postisOpen, setpostIsOpen] = useState(false);
  const [sportisOpen, setsportisOpen] = useState(false);
  const [location, setlocation] = useState("위치를 선택해 주세요");
  const [member, setmember] = useState(1);
  const [username, setUsername] = useState("");

  function openpostModal() {
    setpostIsOpen(!postisOpen);
    setlocation(data.maplocation);
  }
  function opensprotsModal() {
    setsportisOpen(!sportisOpen);
    setlocation(data.maplocation);
  }

  function mius() {
    let value = member;
    setmember(value - 1);
  }
  function plus() {
    let value = member;
    setmember(value + 1);
  }

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };
  return (
    <>
      {postisOpen && (
        <ModalBackdrop>
          <i class="fa-solid fa-circle-xmark fa-2x" onClick={openpostModal}></i>
          <Map></Map>
        </ModalBackdrop>
      )}
      {sportisOpen && (
        <ModalSportsBackdrop>
          <Sportsdiv>
            {sports.map((id) => {
              return <Sportbutton>{id}</Sportbutton>;
            })}
          </Sportsdiv>
        </ModalSportsBackdrop>
      )}

      <Postupdiv>
        <Contnentdiv>
          <Postinputdiv>
            <div onClick={openpostModal}> {location}</div>
            <div onClick={opensprotsModal}> 종목을 선택해주세요</div>
            <div>
              <button onClick={mius}>-</button>
              {member}
              <button onClick={plus}>+</button>
            </div>
            <div> 날짜를 선택해주세요</div>
            <div> 시간을 선택해주세요</div>
          </Postinputdiv>
          <Viewinputdiv>
            <span1>운동장소</span1>
            <div2>{location}</div2>
            <sidemap>{!postisOpen && !sportisOpen && <Map />}</sidemap>
            <span1>종목</span1>
            <div1>축구</div1>
            <span1>인원</span1>
            <div1>{member}명</div1>
            <span1>날짜와 시간</span1>
            <div1>2023년 1월22일 19:00시쯤</div1>
          </Viewinputdiv>
        </Contnentdiv>
        <Postbuttondiv onClick={openModal}>게시글 등록</Postbuttondiv>
      </Postupdiv>
    </>
  );
}

export default Postup;

const Postupdiv = styled.div`
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  width: 55%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Contnentdiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
`;

const Postinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 10px;

  div {
    width: 400px;
    height: 60px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 20px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    padding-top: 14px;
    margin: 10px 0px 30px 60px;
    box-shadow: 5px 5px 5px 5px gray;
    button {
      width: 30px;
      height: 30px;
      font-size: 20px;
      margin: 0px 20px 20px 20px;
    }
  }
`;

const Viewinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.7);
  width: 450px;
  height: 510px;
  border-radius: 20px;
  text-align: left;
  align-items: center;
  margin: 20px 40px 20px 100px;
  padding-bottom: 20px;
  box-shadow: 5px 5px 5px 5px gray;
  sidemap {
    width: 450px;
    padding: 0px 30px;
    height: 240px;
    text-align: center;
    align-items: center;
  }
  span1 {
    width: 450px;
    font-size: 20px;
    margin: 10px 0px 5px 30px;
    font-weight: bold;
  }
  div1 {
    width: 370px;
    height: 40px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    font-size: 20px;
    padding: 0px 0px 0px 30px;
    box-shadow: 5px 5px 5px 5px gray;
  }
  div2 {
    width: 400px;
    font-size: 10px;
    margin-bottom: 20px;
  }
`;

const Postbuttondiv = styled.button`
  /* background-color: yellow; */
  width: 500px;
  height: 60px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 30px;
  background-color: #ff4c29;
  margin-top: 30px;
  margin-bottom: 70px;
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
  height: 90%;
  padding: 0px 200px;
  i {
    position: absolute;
    top: 30px;
    right: 7%;
    background-color: black;
    color: white;
  }
`;

const ModalSportsBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  padding: 0px 200px;
`;

const Sportsdiv = styled.div`
  /* background-color: yellow; */
  width: 500px;
  height: 60px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  font-size: 30px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
`;
const Sportbutton = styled.button`
  /* background-color: yellow; */
  width: 50px;
  height: auto;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: black;
`;
