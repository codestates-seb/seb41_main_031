import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
import { GiSoccerBall } from "react-icons/gi";
import { GiShuttlecock } from "react-icons/gi";
import { FaVolleyballBall  } from "react-icons/fa";
import Map from "../Component/Map";
import styled, { keyframes } from "styled-components";
import React, { useState, useEffect,useRef } from 'react';
import axios, { formToJSON } from "axios";


const Rotate = keyframes` 
0%{
    transform: rotate(0deg);
    border-radius: 0px;
}
50%{ 
    border-radius: 100px;
}
100%{
    transform: rotate(350deg);
    border-radius: 0px;
}
`;

const MainBox = styled.div`

width : 100%;
`
const Main = styled.div`
box-sizing: border-box;

position: relative;
width: 630px;
height: auto;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 25px;

margin-left : 450px;
margin-bottom : 50px;



`
const Header =styled.div`
margin-right : 240px;
margin-top :50px;
display: flex;
justify-content: center;
align-items: center;
font-size : 1.6rem;
font-weight : bold;
position: relative;
.Basketball{
  color : red;
  margin-right : 25px;
  margin-bottom : 20px;
}

.Soccer{
  color : blue;
  margin-right : 25px;
  margin-bottom : 20px;

}

.Badminton{
 
  margin-right : 25px;
  margin-bottom : 20px;

}

.Volleyball{
 
  margin-right : 25px;
  margin-bottom : 20px;

}
.

animation: ${Rotate} 0.9s linear 1;
`
const LeftBox = styled.div`
  
margin-left : 75px;

`

const MiddleBox = styled.div` 
display: flex;
justify-content: center;
align-items: center;
.people{
  
  overflow:hiddlen; 
  white-space:nowrap;
}


`

const Events = styled.div`
box-sizing: border-box;
width: 340px;
height: 50px;
background-image: linear-gradient(to right top, #ffffff, #fcfcfc, #f9f9f9, #f6f6f6, #f3f3f3);
border: 1px solid rgba(0, 0, 0, 0.2);

border-radius: 5px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 105px;
display: flex;
align-items: center;
color: #000000;

margin-top : 13px;
margin-bottom : 37px;

.Basketball2{
  color : red;
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
}

.Soccer2{
  color : blue;
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
}

.Badminton2{
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
}


.Volleyball2{
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
}
`
const EventsBox = styled.div`
margin-right : 80px;
margin-top : 28px;
position: relative;

`
const Date = styled.div`

box-sizing: border-box;
width: 340px;
height: 50px;
background-image: linear-gradient(to right top, #ffffff, #fcfcfc, #f9f9f9, #f6f6f6, #f3f3f3);
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 5px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 105px;
display: flex;
align-items: center;

color: #000000;
position: relative;

margin-top : 13px;
margin-bottom : 24px;
`
const Time = styled.div`
box-sizing: border-box;
width: 340px;
height: 50px;
background-image: linear-gradient(to right top, #ffffff, #fcfcfc, #f9f9f9, #f6f6f6, #f3f3f3);
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 5px;


font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 105px;
display: flex;
align-items: center;
position: relative;
color: #000000;

margin-bottom : 37px;
`
const DateTimeBox = styled.div`
position: relative;
.calendar{
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
}
.clock{
  margin-left : 12px;
  margin-right : 10px;
  width : 1.5rem;
  height : 1.5rem;
  
}


` 
const Place = styled.div`

box-sizing: border-box;

width: 340px;
height: 150px;

background: url(.jpg), #FFFFFF;
border: 1px solid #000000;

border-radius: 5px;
position: relative;
.map{
 
}

margin-bottom : 28px;
`
const MapBox = styled.div``

const RightBox = styled.div`
display: flex;
justify-content: center;

margin-bottom : 300px;
margin-right : 100px;


`
const PeopleImage = styled.div`

width: 2.3rem;
height: 2.3rem;; 
border-radius: 70%;
overflow: hidden;
background-color : green;

`

const People = styled.div`

display: flex;
font-size : 1rem;
margin-bottom : 10px;
bottom : 5px;  


`


const AttendButton = styled.button`
display:flex;
align-items:center;
margin:auto;
width: 630px;
height: 60px;


background: linear-gradient(195deg,#ff4c29,#f4a393);
border-radius: 0px 0px 25px 25px;

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



`
const BottomBox = styled.div`

`
const PeopleBox = styled.div`
`
const Party = styled.div`
white-space: nowrap;
margin-bottom : 20px;
.Continue {
  font-size : 0.8rem;
  margin-right : 55px;
}
.PartyCount{
   
}
`
const PartyPeople = styled.div`
margin-bottom : 20px;
font-weight : bold;


.people{

  
}
`

const MapContents = styled.div`
margin-top : 11px;
font-size : 0.9rem;
.location{
  width :0.9rem;
  height : 0.9rem;
  margin-right : 3px;
}
`

const Who = styled.div`
margin-top : 10px;
margin-left : 13px;
font-size : 1rem;
font-weight : bold;
`




function PostDetail(){

const [data,setData] = useState([]);



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


const ChangeIcon = ()=> {

  if (data.item === '농구' ){
    return <FontAwesomeIcon icon={faBasketball} className ='Basketball' />
  }

  if (data.item === '축구'){
    return <GiSoccerBall className = 'Soccer'/>
  }

  if(data.item === '배드민턴'){
    return <GiShuttlecock className = 'Badminton'/>
  }
  
  if(data.item === '배구'){
     return <FaVolleyballBall className = 'Volleyball'/> 
  }
}

const ChangeIcon2 = ()=> {

  if (data.item === '농구' ){
    return <FontAwesomeIcon icon={faBasketball} className ='Basketball2'/>
  }

  if (data.item === '축구'){
    return <GiSoccerBall className = 'Soccer2'/>
  }

  if(data.item === '배드민턴'){
    return <GiShuttlecock className = 'Badminton2'/>
  }

  if(data.item === '배구'){
    return <FaVolleyballBall className = 'Volleyball2'/> 
 }
}


function PartycompleteCheck(){
  
  
  return '모집중';
}

    return(
       <MainBox>
      <Main>
        
        <Header>{ChangeIcon()}농구하실 분 구해요~~</Header>
        <MiddleBox>
        <LeftBox>
          <EventsBox>
            <span className ='Events'>종목</span>
            <Events>{ChangeIcon2()}{data.item}</Events>
          </EventsBox>
          <DateTimeBox>
            <span>날짜와 시간</span>  
            <Date><FaRegCalendarAlt className = 'calendar'/>2023년 1월 22일</Date>
            <Time><FcAlarmClock className = 'clock'/>19:00시쯤</Time>
          </DateTimeBox>
          <MapBox>
            <span>운동종목</span>
            <MapContents>
            <span><HiLocationMarker className = 'location'/>{data.address}</span>
            <Place ><Map/></Place>
            </MapContents>
          </MapBox>
        </LeftBox> 
        <RightBox>
          <PeopleBox>
            <PartyPeople>
            <span className = 'people'>모집인원</span>
            </PartyPeople>
            <Party>
              <span className = 'Continue'>{PartycompleteCheck()}</span> 
              <span className = 'PartyCount'>{data.Party}</span>
            </Party>
            <People>
              <PeopleImage/>
              <Who>
              <span>누구</span>
              </Who>
            </People>
          
          </PeopleBox>
        </RightBox>
        </MiddleBox>
        <BottomBox>
          <AttendButton
          >
            모임 참가하기
            </AttendButton>
        </BottomBox>
    
      </Main>  
      </MainBox> 
    )
}



export default PostDetail;