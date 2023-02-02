import React, { useState } from "react";
import axios from "axios";
import Map from "../Component/Map";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Postup({ openModal }) {
  const data = useSelector((state) => state);
  const sports = ["축구", "배구", "농구", "탁구", "헬스", "기타"];
  const [sprot, setsprot] = useState("종목을 선택해주세요");
  const [postisOpen, setpostIsOpen] = useState(false);
  const [sportisOpen, setsportisOpen] = useState(false);
  const [dateisOpen, setdateisOpen] = useState(false);
  const [timeisOpen, settimeisOpen] = useState(false);
  const [location, setlocation] = useState("위치를 선택해 주세요");
  const [member, setmember] = useState(1);
  const [date, setDate] = useState(new Date());
  const [gethour, setgethour] = useState(1);
  const [getmin, setgetmin] = useState(1);
  const [active, setActive] = useState("AM");
  const [polat, setpolat] = useState("");
  const [polng, setpolng] = useState("");
  const dateString = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  const timeString = `${
    active === "AM" ? gethour : gethour + 12
  }시 ${getmin}분`;

  function openpostModal() {
    setpostIsOpen(!postisOpen);
    console.log(data.address.address);
    setlocation(data.address.address);
    setpolat(data.lat);
    setpolng(data.lng);
  }
  function opensprotsModal() {
    setsportisOpen(!sportisOpen);
  }

  function opendateModal() {
    setdateisOpen(!dateisOpen);
  }

  function opentimeModal() {
    settimeisOpen(!timeisOpen);
  }

  function mius(event) {
    const buttonName = event.target.value;
    if (buttonName === "hour") {
      setgethour(gethour < 1 ? 12 : gethour - 1);
    } else if (buttonName === "min") {
      setgetmin(getmin < 1 ? 59 : getmin - 1);
    } else if (buttonName === "member") {
      setmember(member - 1);
    }
  }

  function plus(event) {
    const buttonName = event.target.value;
    if (buttonName === "hour") {
      setgethour(gethour > 11 ? 1 : gethour + 1);
    } else if (buttonName === "min") {
      setgetmin(getmin > 58 ? 1 : getmin + 1);
    } else if (buttonName === "member") {
      setmember(member + 1);
    }
  }

  function sport(event) {
    const buttonName = event.target.value;
    setsprot(buttonName);
    setsportisOpen(!sportisOpen);
  }

  function onClickDay(value) {
    setDate(value);
  }
  const auth = window.localStorage.getItem("Authorization");

  function postup() {
    openModal();
    axios
      .post(
        `http://ec2-54-180-138-46.ap-northeast-2.compute.amazonaws.com:8080/posts`,
        {
          date: dateString,
          time: timeString,
          event: sprot,
          lat: `${polat}`,
          lng: `${polng}`,
          location: location,
          playerNum: member,
          image:
            "data:image/jpeg;base64,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",
        },
        {
          headers: {
            Authorization: JSON.parse(auth).jwtToken,
          },
        }
      )
      .then(function (response) {
        // response
        console.log("송신 성공"); //데이터 전송 성공시
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
        alert("로그인을 해주세요");
      });
    window.location.replace("/");
  }

  return (
    <>
      {console.log("" + polat)}
      {console.log("" + polng)}
      {postisOpen && (
        <ModalBackdrop>
          <Map></Map>
          <button onClick={openpostModal}>위치 설정완료</button>
        </ModalBackdrop>
      )}

      <Postupdiv>
        <Contnentdiv>
          {!postisOpen && (
            <i class="fa-solid fa-circle-xmark fa-1x" onClick={openModal}></i>
          )}
          {sportisOpen && (
            <Sportsdiv>
              {sports.map((id) => {
                return (
                  <Sportbutton onClick={sport} value={id}>
                    {id}
                  </Sportbutton>
                );
              })}
            </Sportsdiv>
          )}
          {dateisOpen && (
            <Datesdiv>
              <Calendar onClickDay={onClickDay} value={date} />
            </Datesdiv>
          )}
          {timeisOpen && (
            <Timediv>
              <Datediv>
                <div1>시</div1>
                <button value="hour" onClick={plus}>
                  <i class="fa-sharp fa-solid fa-chevron-up"></i>
                </button>
                <span>{gethour}</span>
                <button value="hour" onClick={mius}>
                  <i class="fa-sharp fa-solid fa-chevron-down"></i>
                </button>
              </Datediv>
              <Datediv>
                <div1>분</div1>
                <button value="min" onClick={plus}>
                  <i class="fa-sharp fa-solid fa-chevron-up "></i>
                </button>
                <span>{getmin}</span>
                <button value="min" onClick={mius}>
                  <i class="fa-sharp fa-solid fa-chevron-down "></i>
                </button>
              </Datediv>
              <AMPM
                className={"AM" === active ? "active" : ""}
                onClick={() => setActive("AM")}
              >
                <span>AM</span>
              </AMPM>
              <AMPM
                className={"PM" === active ? "active" : ""}
                onClick={() => setActive("PM")}
              >
                <span>PM</span>
              </AMPM>
            </Timediv>
          )}
          <Postinputdiv>
            <div onClick={openpostModal}> {location}</div>
            <div onClick={opensprotsModal}> {sprot}</div>
            <div>
              <button value="member" onClick={mius}>
                -
              </button>
              {member}
              <button value="member" onClick={plus}>
                +
              </button>
            </div>
            <div onClick={opendateModal}> {dateString}</div>
            <div onClick={opentimeModal}> {timeString}</div>
          </Postinputdiv>
          <Viewinputdiv>
            <span1>운동장소</span1>
            <div2>{location}</div2>
            <sidemap>{!postisOpen && <Map />}</sidemap>
            <span1>종목</span1>
            <div1>{sprot}</div1>
            <span1>인원</span1>
            <div1>{member}명</div1>
            <span1>날짜와 시간</span1>
            <div1>{`${dateString}    ${timeString}`}</div1>
          </Viewinputdiv>
        </Contnentdiv>
        {!postisOpen && (
          <Postbuttondiv onClick={postup}>게시글 등록</Postbuttondiv>
        )}
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
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  z-index: 0;
  i {
    position: absolute;
    top: 10px;
    right: 15px;
    color: black;
  }
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
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  padding: 0px 200px;
  button {
    width: 500px;
    height: 80px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 30px;
    background-color: #ff4c29;
    margin-top: 30px;
    margin-bottom: 40px;
  }
`;

const Sportsdiv = styled.div`
  /* background-color: yellow; */
  z-index: 1;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  top: 40%;
  left: 59px;
  width: 400px;
  height: 60px;
  font-weight: bold;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  font-size: 30px;
  background-color: white;
  color: black;
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Datesdiv = styled.div`
  /* background-color: yellow; */
  z-index: 1;
  position: absolute;
  top: 5%;
  left: 8%;
`;

const Timediv = styled.div`
  z-index: 1;
  position: absolute;
  width: 400px;
  height: auto;
  display: flex;
  top: 52%;
  left: 57px;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  color: black;
  align-items: center;
  vertical-align: middle;
  padding: 10px 10px;
  box-shadow: 5px 5px 5px 5px gray;
`;

const Datediv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0px 5px 0px 5px;
  button {
    width: 100%;
    height: 20px;
    border: none;
    background: linear-gradient(
      to top,
      rgba(44, 57, 75, 1),
      rgba(44, 57, 75, 0.8),
      rgba(44, 57, 75, 0.5)
    );
  }
  button:hover {
    background-color: rgba(44, 57, 75, 1);
  }
  div1 {
    margin-bottom: 5px;
    font-size: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0px 10px 0px;
  }
  i {
    position: relative;
    top: 0;
    right: 0;
    color: black;
  }
`;
const AMPM = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  padding-top: 20px;
  span {
    margin: 10px 0px 10px 0px;
    font-size: 20px;
  }
  &:hover {
    font-weight: bold;
    color: var(--black-900);
  }
  &.active {
    align-items: center;
    font-weight: bold;
    background: var(--black-050);
    color: var(--black-900);
    border-right: 3px solid var(--theme-primary-color);
  }
`;
