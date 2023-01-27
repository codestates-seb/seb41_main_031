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
  const dateString = `
    ${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  const timeString = `
  ${active === "AM" ? gethour : gethour + 12}시 ${getmin}분`;

  function openpostModal() {
    setpostIsOpen(!postisOpen);
    console.log(data.address.address);
    setlocation(data.address.address);
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

  function postup() {
    openModal();
    axios
      .post(
        `/posts`,
        {
          date: dateString,
          time: timeString,
          event: sprot,
          lat: `${data.address.lat}`,
          lng: `${data.address.lng}`,
          location: location,
          playerNum: member,
          image:
            "data:image/jpeg;base64,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",
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoiZ2lhbm5pc0BnbWFpbC5jb20iLCJzdWIiOiJnaWFubmlzQGdtYWlsLmNvbSIsImlhdCI6MTY3NDc0OTMxNCwiZXhwIjoxNjc0ODM1NzE0fQ.C9aQ_Uq3PkMzeEotUv1sMdIG1aLpXgT6k71qH5bubgkfUpUGI6hQKkgLvo4O6arn`,
          },
        }
      )
      .then(function (response) {
        // response
        console.log(response.data); //데이터 전송 성공시
      })
      .catch(function (error) {
        // 오류발생시 실행
        console.log(error);
      });
  }

  return (
    <>
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