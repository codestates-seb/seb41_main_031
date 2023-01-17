import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate,Navigate } from 'react-router-dom';

const Main = styled.div`
width : 100%;
`;
const LeftBox = styled.div`
float:left;
`;
const Image = styled.div`
width: 12rem;
    height: 12rem;
    border-radius: 70%;
    overflow: hidden;
    background-color : green;
    margin-right : 80px;
    margin-top : 30px;
    `;
const RightBox = styled.div`

margin-top : 50px;
`

const EmailBox = styled.div`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 50px;
text-align : center;


font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
display: flex;
  justify-content: center;
  align-items: center;


margin-bottom : 15px;
`;
const NicknameBox = styled.div`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 15px;
`;
const RegionBox = styled.div`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 15px;
`;
const SexBox = styled.div`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 15px;
`;
const AgeBox = styled.div`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom : 15px;
`;

const BottomBox = styled.div`
clear: both;
margin-top : 100px;
margin-bottom : 60px;
`;
const EditButton = styled.button`


width: 400px;
height: 45.55px;

background-image: linear-gradient(to bottom, #2c394b, #17343e, #0f2d2d, #13251c, #171c0d);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: #F9FBFF;

display: flex;
  justify-content: center;
  align-items: center;
  margin:auto;

  margin-bottom : 30px;

  &:hover {
    transition: all 1.1s;
    background-color: rgb(0, 0, 0, 0.6);
    color: rgb(255, 255, 255, 100);
}

`;
const WithdrawButton = styled.button`
display:flex;
align-items:center;
margin:auto;
width: 400px;
height: 45.55px;


background-image: linear-gradient(to bottom, #ff4c29, #f26933, #e67e43, #da8e57, #cf9c6f);
border-radius: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: #F9FBFF;

display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    transition: all 1.1s;
    background-color: rgb(196,60,33);
    
}
`;

const MiddleBox = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
`



function Mypage() {
  
  
  const navigate = useNavigate();

  const Deleteuser = (e) => {
    e.preventDefault();
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
      
      setTimeout(function (){
        axios
        .delete('http://localhost:5500/data/1')
        .then(() => {
          window.location.reload();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
      }, 3000)
      } 
  };
    
  
  
  
  
  return (
  <Main>
    <MiddleBox>
    <LeftBox>
      <Image></Image>
    </LeftBox>
    <RightBox>
        <EmailBox>이메일</EmailBox>
        <NicknameBox>닉네임</NicknameBox>
        <RegionBox>지역</RegionBox>
        <SexBox>성별</SexBox>
        <AgeBox>나이</AgeBox>
    </RightBox>
    </MiddleBox>
    <BottomBox>
      <Link to ="/mypage/editprofile">
      <EditButton>프로필 수정</EditButton>
      </Link>
      <WithdrawButton onClick = {Deleteuser}>
        탈퇴하기
      </WithdrawButton>
    </BottomBox>
  </Main>
  
  )
}

export default Mypage;











<button class="p-button p-button--primary p-button--inline p-button--fill p-button--large padding--l css-kxpn6i" type="button" aria-disabled="false">계약 신청하기</button>
