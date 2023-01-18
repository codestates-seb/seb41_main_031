import React, { useState } from "react";
import Map from "../Component/Map";
import styled from "styled-components";

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
    font-size: 25px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 20px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    padding-top: 12px;
    margin: 10px 0px 30px 60px;
    box-shadow: 5px 5px 5px 5px gray;
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
    padding-left: 70px;
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

function Postup({ openModal }) {
  const [username, setUsername] = useState("");
  const change = (e) => {
    let { value } = { ...e.target };
    setUsername(value);
  };
  return (
    <>
      <Postupdiv>
        <Contnentdiv>
          <Postinputdiv>
            <div> 위치를 선택해주세요</div>
            <div> 종목을 선택해주세요</div>
            <div> 인원을 선택해주세요</div>
            <div> 날짜를 선택해주세요</div>
            <div> 시간을 선택해주세요</div>
          </Postinputdiv>
          <Viewinputdiv>
            <span1>운동장소</span1>
            <div2>서울 상암월드컵경기장 보조경기장</div2>
            <sidemap>
              <Map />
            </sidemap>

            <span1>종목</span1>
            <div1>축구</div1>
            <span1>인원</span1>
            <div1>4명</div1>
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
