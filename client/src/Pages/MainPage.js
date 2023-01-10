import React, { useState } from "react";
import Map from "../Component/Map";
import styled from "styled-components";

const Maindiv = styled.div`
  width: 1436px;
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
  input {
    width: 640px;
    height: 60px;
    font-size: 20px;
    font-weight: thin;
    border-radius: 10px;
    text-align: center;
    margin: 30px 0px 0px 0px;
  }
  div {
    i {
      position: absolute;
      top: 255px;
      left: 410px;
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
  }
  section {
    position: relative;
    left: 850px;
    display: flex;
    flex-direction: row;
    span {
      margin: 30px 0px 25px 50px;
      font-size: 20px;
      text-decoration: underline;
      text-decoration-thickness: 5px;
    }
    i {
      margin: 30px 0px 25px 10px;
    }
  }
`;
const Mapdiv = styled.div`
  width: 1200px;
  border-radius: 30px;
  margin: 80px 0px 0px 100px;
`;

const Reqdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Reqboxdiv = styled.div`
  background-color: white;
  color: black;
  box-shadow: 5px 5px 5px 5px gray;
  display: flex;
  margin: 60px 0px 0px 30px;
  flex-direction: column;
  width: 400px;
  height: 380px;
  border-radius: 20px;
  font-size: 8px;
  text-align: center;
  align-items: center;
  impormationdiv {
    color: white;
    box-shadow: 5px 5px 5px 5px gray;
    display: flex;
    flex-direction: row;
    background-color: #ff4c29;
    width: 400px;
    height: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    divdate {
      margin: 10px 0px 0px 30px;
    }
    divparty {
      margin: 17px 0px 0px 220px;
    }
  }
  h1 {
    font-size: 25px;
    margin-top: 50px;
  }
  contentdiv {
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
  }
  button {
    font-size: 20px;
    width: 170px;
    height: 50px;
    background-color: #ff4c29;
    border-radius: 50px;
    color: white;
    border: none;
    margin-top: 30px;
  }
  locationdiv {
    font-size: 15px;
    margin-top: 30px;
  }
`;

function MainPage() {
  const [username, setUsername] = useState("");

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  return (
    <>
      <Maindiv>
        <Serachdiv>
          <div1>WHAT’S YOUR FAVORITE SPORT?🔍</div1>
          <div>
            <i class="fa-solid fa-magnifying-glass  fa-2x"></i>
            <input
              type="text"
              name="search"
              placeholder="어떤 운동 하세요?"
              value={username}
              onChange={change}
            />
          </div>
          <div2>🔥Make YOUR TEAM!!🔥</div2>
          <button>Let’s do It!!!</button>
          <div3>TRY EVERY THING WITH YOUR TEAM</div3>
        </Serachdiv>
        <Setlocdiv>
          <div>NOW METTIONG....</div>
          <section>
            <span>내 주변</span>
            <i class="fa-sharp fa-solid fa-caret-down fa-2x"></i>
          </section>
        </Setlocdiv>
        <Mapdiv>
          <Map />
        </Mapdiv>
        <Reqdiv>
          <Reqboxdiv>
            <impormationdiv>
              <divdate>
                DATE | 11/16 <br />
                PARTY | 11/16
              </divdate>
              <divparty>TIME | 11/16V</divparty>
            </impormationdiv>
            <h1>농구 할 사람 구해요~~ 🏀</h1>
            <contentdiv>👇PLS PRESS JOIN👇</contentdiv>
            <button>JOIN</button>
            <locationdiv>-마평리 롯대마트-</locationdiv>
          </Reqboxdiv>
        </Reqdiv>
      </Maindiv>
    </>
  );
}

export default MainPage;
