import React, { useState } from "react";
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
  const dateString = date.toISOString().slice(0, 10);
  const [gethour, setgethour] = useState(1);
  const [getmin, setgetmin] = useState(1);
  const [active, setActive] = useState("");
  const [time, setTime] = useState(new Date().toLocaleString());

  const [username, setUsername] = useState("");

  function openpostModal() {
    setpostIsOpen(!postisOpen);
    setlocation(data.maplocation);
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
  function handleClick() {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  }

  function mius() {
    let value = member;
    setmember(value - 1);
  }
  function plus() {
    let value = member;
    setmember(value + 1);
  }

  function sport(event) {
    const buttonName = event.target.value;
    setsprot(buttonName);
    setsportisOpen(!sportisOpen);
  }

  function onClickDay(value) {
    setDate(value);
    console.log("Day Clicked: ", value);
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
              <i class="fa-sharp fa-solid fa-chevron-up"></i>
            </button>
            <span>{getmin}</span>
            <button value="min" onClick={mius}>
              <i class="fa-sharp fa-solid fa-chevron-down"></i>
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

      <Postupdiv>
        <Contnentdiv>
          <Postinputdiv>
            <div onClick={openpostModal}> {location}</div>
            <div onClick={opensprotsModal}> {sprot}</div>
            <div>
              <button onClick={mius}>-</button>
              {member}
              <button onClick={plus}>+</button>
            </div>
            <div onClick={opendateModal}> 날짜를 선택해주세요</div>
            <div onClick={opentimeModal}> 시간을 선택해주세요</div>
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
            <div1>{dateString}</div1>
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

const Sportsdiv = styled.div`
  /* background-color: yellow; */
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  top: 34%;
  left: 28%;
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
  position: fixed;
  top: 29%;
  left: 29%;
`;

const Timediv = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  color: black;
  align-items: center;
  vertical-align: middle;
`;

const Datediv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0px 5px 0px 5px;
  button {
    width: 100%;
    height: 30px;
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
    margin: 20px 0px 20px 0px;
  }
  i {
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
    margin: 20px 0px 20px 0px;
    font-size: 30px;
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
