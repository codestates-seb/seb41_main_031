import React, { useState, useEffect } from "react";
import Map from "../Component/Map";
import styled from "styled-components";
import axios from "axios";
import Reqboxdiv from "../Component/Reqboxdiv";

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
  }
  section {
    position: relative;
    left: 65%;
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
  width: 80vw;
  border-radius: 30px;
  margin: 80px 0px 0px 100px;
`;

const Reqdiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function MainPage() {
  const [username, setUsername] = useState("");
  const [data1, setdata] = useState([]);

  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };

  useEffect(() => {
    console.log("Works!before");
    setTimeout(function () {
      console.log("Works!");
      axios
        .get("http://localhost:4000/data")
        .then(function (response) {
          // response
          setdata(response.data);
          console.log(response.data); //데이터 전송 성공시
        })
        .catch(function (error) {
          // 오류발생시 실행
        })
        .then(function (response) {
          // 항상 실행
        }); //컴포넌트가 리랜더링 될때마다 실행
    }, 3000);
  }, []);

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
              />
            );
          })}
        </Reqdiv>
      </Maindiv>
    </>
  );
}

export default MainPage;
