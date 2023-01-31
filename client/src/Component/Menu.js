import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCurrentLocation, BiChat, BiMenu, BiBell } from "react-icons/bi";
// import Alarm from'./Alarm';

const MenuContainer = styled.div`
  margin-top: -550px;
  margin-left: -250px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  /* margin: 20px auto; */
  border: 1px black solid;
  border-radius: 10px 10px;
  background-color: rgba(255, 255, 255, 0.8);

  .menucontainer {
    /* position: absolute; */
    /* right: 1000px; */
    text-decoration: none !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px blue solid; */
    font-size: 20px;

    buttondiv {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none !important;
      color: black;
      margin: 12px;
      margin-right: -5px;
      width: 250px;
      height: 60px;
      background-color: rgba(255, 255, 255, 0.8);
      border: 0.5px black solid;
      border-radius: 10px 10px;
      box-shadow: 0px 1px 2px gray inset;
      font-size: 18px;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px;
      margin-right: -5px;
      width: 250px;
      height: 60px;
      background-color: rgba(255, 255, 255, 0.8);
      border: 0.5px black solid;
      border-radius: 10px 10px;
      box-shadow: 0px 1px 2px gray inset;
      font-size: 18px;
    }
  }

  transition: 1s;
  &.activeMenu {
    margin-top: -10px;
  }
`;

const AlarmContainer = styled.div`
  margin-top: -550px;
  margin-left: -250px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  /* margin: 20px auto; */
  border: 1px black solid;
  border-radius: 10px 10px;
  background-color: rgba(255, 255, 255, 0.8);

  .alarmcontainer {
    margin-top: -50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .alarmbar {
    font-size: 20px;
  }
  .alarm {
    /* position: absolute; */
    /* right: 1000px; */
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px blue solid; */
    font-size: 20px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 348px;
      height: 60px;
      background-color: rgba(255, 255, 255, 0.8);
      border: 0.5px black solid;
      /* border-radius: 10px 10px; */
      box-shadow: 0px 1px 3px 0px gray inset;
      font-size: 18px;
    }
    .alarmcontent {
      display: flex;
      justify-content: space-around;
      text-align: left;
      font-size: 15px;
    }
  }
  &.hideAlarm {
    margin-top: -1100px;
  }
  transition: 1s;
  &.activeAlarm {
    margin-top: 40px;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  top: 17px;
  left: 10px;
  /* align-items: right; */
  button {
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 0px;
  }
`;

const AlarmButton = styled.div`
  position: absolute;
  top: 17px;
  left: 60px;
  /* align-items: right; */
  button {
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 0px;
  }
`;

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [alarmOpen, setAlarmOpen] = useState(false);


function Logout(){
  
window.localStorage.removeItem('Authorization');
console.log('삭제 완료')
}
  

  return (
    <>
      <MenuContainer className={menuOpen ? "activeMenu" : "hideMenu"}>
        <div className="menucontainer">
          MENU
          <Link to="/mypage">
            <buttondiv>마이페이지</buttondiv>
          </Link>
          <button>내가 쓴 글</button>
          <button>
            <BiCurrentLocation />내 위치
          </button>
          <button>
            <BiChat />
            오픈 톡
          </button>
          <button
          onClick = {Logout()}
          >LOGOUT</button>
        </div>
      </MenuContainer>

      <MenuButton>
        <button
          onClick={() => {
            setMenuOpen((menuOpen) => !menuOpen);
            setAlarmOpen(false);
          }}
        >
          <BiMenu />
        </button>
      </MenuButton>
      <AlarmContainer className={alarmOpen ? "activeAlarm" : "hideAlarm"}>
        <div className="alarmcontainer">
          <div className="alarmbar">ALARM</div>
          <div className="alarm">
            <button className="alarmcontent">
              <div>
                삼고님이 입장하셨습니다
                <br />
                현재인원 4/5
              </div>
              <div>
                2023-01-11
                <br />
                11:00 PM
              </div>
            </button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
      </AlarmContainer>
      <AlarmButton>
        <button
          onClick={() => {
            setAlarmOpen((alarmOpen) => !alarmOpen);
            setMenuOpen(false);
          }}
        >
          <BiBell />
        </button>
      </AlarmButton>
    </>
  );
}
export default Menu;
