import React from "react";
import styled from "styled-components";
import image from "../Asset/yadon.png";

const Postdiv = styled.div`
  width: 1436px;
  display: flex;
  font-size: 120;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
`;
const Postcontentdiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0px 20px 30px;
`;
const Postuserdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
  namediv {
    display: flex;
    flex-direction: row;
    img {
      border-radius: 100px;
      width: 70px;
      height: auto;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    div {
    }
  }
`;

const Contentdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px 30px;
  div {
    font-weight: bold;
    font-size: 20px;
  }
`;

const Boxdiv = styled.div`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  padding: 10px 30px 10px 30px;
  margin: 10px 180px 60px 0px;
  div {
    font-weight: normal;
  }
`;

function PostDetail() {
  return (
    <>
      <Postdiv>
        농구 할 사람 구해요~~
        <Postcontentdiv>
          <Contentdiv>
            <div>종목</div>
            <Boxdiv>
              <div>농구</div>
            </Boxdiv>
            <div>날짜와 시간</div>
            <Boxdiv>
              <div>2023년 1월 22일</div>
            </Boxdiv>
            <Boxdiv>
              <div>19:00 PM</div>
            </Boxdiv>
          </Contentdiv>
          <Postuserdiv>
            <span>모집인원</span>
            <div>모집중 5/10</div>
            <namediv>
              <img src={image} alt="user_img" />
              <div>SamSamgo</div>
            </namediv>
          </Postuserdiv>
        </Postcontentdiv>
      </Postdiv>
    </>
  );
}

export default PostDetail;
