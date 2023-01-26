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
    const api = axios.create({
      baseURL: "http://54.180.138.46:8080",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoiZ2lhbm5pc0BnbWFpbC5jb20iLCJzdWIiOiJnaWFubmlzQGdtYWlsLmNvbSIsImlhdCI6MTY3NDc0OTMxNCwiZXhwIjoxNjc0ODM1NzE0fQ.C9aQ_Uq3PkMzeEotUv1sMdIG1aLpXgT6k71qH5bubgkfUpUGI6hQKkgLvo4O6arn`,
      },
    });

    const postData = {
      Date: dateString,
      Time: timeString,
      Party: `0/${member}`,
      item: sprot,
      address: location,
      lat: `${data.address.lat}`,
      lng: `${data.address.lng}`,
      location: "giannis@gmail.com",
      playerNum: 3,
      event: "cnfkds",
    };

    api
      .post("/posts", postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // axios
    //   .post(`/posts`, {
    //     Date: dateString,
    //     Time: timeString,
    //     Party: `0/${member}`,
    //     item: sprot,
    //     address: location,
    //     lat: `${data.address.lat}`,
    //     lng: `${data.address.lng}`,
    //     location: "giannis@gmail.com",
    //     playerNum: 3,
    //     event: "cnfkds",
    //   })
    //   .then(function (response) {
    //     // response
    //     console.log(response.data); //데이터 전송 성공시
    //   })
    //   .catch(function (error) {
    //     // 오류발생시 실행
    //     console.log(error);
    //   });
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
