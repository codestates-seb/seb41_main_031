import React, { useState } from "react";
import Map from "../Component/Map";
import styled from "styled-components";

const Postupdiv = styled.div`
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  width: 60%;

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
  div {
    width: 550px;
    height: 110px;
    font-size: 36px;
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    border-radius: 20px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    padding-top: 30px;
    margin: 30px 0px 60px 100px;
    box-shadow: 5px 5px 5px 5px gray;
  }
`;

const Viewinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0, 0, 0, 0.7);
  width: 670px;
  height: 910px;
  border-radius: 20px;
  text-align: left;
  align-items: center;
  margin: 30px 100px 0px 100px;

  box-shadow: 5px 5px 5px 5px gray;
  sidemap {
    width: 530px;
    height: 240px;
    background-color: aliceblue;
  }
  span1 {
    width: 540px;
    font-size: 30px;
    margin: 30px 0px 10px 0px;
    font-weight: bold;
  }
  div1 {
    width: 540px;
    height: 80px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    font-size: 30px;
    padding: 20px 0px 0px 30px;
    box-shadow: 5px 5px 5px 5px gray;
  }
  div2 {
    width: 540px;
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Postbuttondiv = styled.button`
  /* background-color: yellow; */
  width: 740px;
  height: 90px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 35px;
  background-color: #ff4c29;
  margin-top: 60px;
  margin-bottom: 30px;
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
            <div> 위치를 선택해주세요</div>
            <div> 위치를 선택해주세요</div>
            <div> 위치를 선택해주세요</div>
            <div> 위치를 선택해주세요</div>
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
