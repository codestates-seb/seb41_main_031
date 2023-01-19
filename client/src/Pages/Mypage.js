import styled from 'styled-components';
import axios, { formToJSON } from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useNavigate,Navigate } from 'react-router-dom';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { BsFillPersonFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { TfiAlarmClock } from "react-icons/tfi";



const Main = styled.div`

@media all and (max-width: 1100px){
	
  width : 70%;
  height : 70%;
}
`;
const LeftBox = styled.div`
float:left;
`;
const Image = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 70%;
    overflow: hidden;
    margin-right : 80px;
    margin-top : 30px;
    border : solid 2px;
    `;
const RightBox = styled.div`

margin-top : 50px;
`

const EmailButton = styled.button`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 0px;
border-radius: 50px;
text-align : left;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: rgba(0, 0, 0, 0.7);
margin-bottom : 15px;

.emailicon{
margin-left : 10px;
}
.emaildata{
  margin-left : 5px}
}
`;
const NicknameButton = styled.button`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 0px;
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;

display: flex;
align-items: center;
text-align: left;

color: rgba(0, 0, 0, 0.7);

margin-bottom : 15px;

.nicknameicon{
  margin-left : 10px;
}

.nicknamedata{
  margin-left : 5px;
}
`;
const RegionButton = styled.button`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 0px;
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;

display: flex;
align-items: center;
text-align: left;

color: rgba(0, 0, 0, 0.7);

  margin-bottom : 15px;

  .regionicon{
    margin-left : 10px;
  }
  
  .regiondata{
    margin-left : 5px;
  }
  
`;
const SexButton = styled.button`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 0px;
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;

display: flex;
align-items: center;
text-align: left;

color: rgba(0, 0, 0, 0.7);

  margin-bottom : 15px;

  .sexicon{
    margin-left : 6px;
  }
  
  .sexdata{
    margin-left : 5px;
  }
`;
const AgeButton = styled.button`

width : 200px;
height : 35px;
background: rgba(255, 255, 255, 0.08);
border: 0px;
border-radius: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.9rem;
line-height: 48px;

display: flex;
align-items: center;
text-align: left;

color: rgba(0, 0, 0, 0.7);

  margin-bottom : 15px;

  .ageicon{
    margin-left : 10px;
  }
  
  .agedata{
    margin-left : 5px;
  }
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

const fe = ()=>{
  console.log('dfdfdfdfd');
}

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
    
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Works!before");
    setTimeout(function () {
      console.log("Works!");
      axios
        .get("http://localhost:5500/data/1")
        .then(function (response) {
          // response
          setData(response.data);
          //데이터 전송 성공시
        })
        .catch(function (error) {
          // 오류발생시 실행
        })
        .then(function (response) {
          // 항상 실행
        }); //컴포넌트가 리랜더링 될때마다 실행
    }, 3000);},[])
    
  return (
  <Main>
    <MiddleBox>
    <LeftBox>
      <Image src={data.img}>

      </Image>
    </LeftBox>
    <RightBox>
        <EmailButton >
             <AiTwotoneMail className = 'emailicon'/>
             <span className = 'emaildata'>{data.Email}</span>
        </EmailButton>
        <NicknameButton>
        <BsFillPersonFill className = 'nicknameicon'/>
        <span className = 'nicknamedata'>{data.Nickname}</span>
          </NicknameButton>
        <RegionButton>
        <ImLocation className = 'regionicon'/>
        <span className = 'regiondata'>{data.Region}</span>
        </RegionButton>
        <SexButton>
        <FontAwesomeIcon icon={faVenusMars} className = 'sexicon'/>
        <span className = 'sexdata'>{data.Sex}</span>
        </SexButton>
        <AgeButton>
        <TfiAlarmClock className = 'ageicon'/>
        <span className = 'agedata'>{data.Age}</span>
          </AgeButton>
    </RightBox>
    </MiddleBox>
    <BottomBox>
      <Link to ="/mypage/editprofile">
      <EditButton>프로필 수정</EditButton>
      </Link>
      <WithdrawButton onClick = {fe}>
        탈퇴하기
      </WithdrawButton>
    </BottomBox>
  </Main>
  
  )
}

export default Mypage;











<button class="p-button p-button--primary p-button--inline p-button--fill p-button--large padding--l css-kxpn6i" type="button" aria-disabled="false">계약 신청하기</button>
