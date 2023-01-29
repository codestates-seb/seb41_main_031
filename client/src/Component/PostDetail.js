// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";
import Map from "../Component/Map";
import styled, { keyframes } from "styled-components";
import DummyData from "../Asset/DummyData"; //이름 바꾸기

function PostDetail({ openModal }) {
  const [Joindata, setJoindata] = useState([]);
  const [Joinmemberdata, setJoinmemberdata] = useState([]);
  const data = useSelector((state) => state);
  const auth = window.localStorage.getItem("Authorization");
  useEffect(() => {
    const promise = DummyData;
    const getData = () => {
      promise.then((dummyData) => {
        setJoindata(dummyData);
      });
    };
    getData();
  }, []);

  useEffect(() => {}, []);

  console.log("dddd" + data.postid);

  const filteredData = Joindata.filter((item) => item.postId === data.postid);

  return (
    <>
      <Postupdiv>
        {filteredData.map((item) => (
          <div key={item.id}>
            <i class="fa-solid fa-circle-xmark fa-1x" onClick={openModal}></i>
            <sprotsnamediv>{item.event}할 사람 구해요</sprotsnamediv>
            <Contnentdiv>
              <Viewinputdiv>
                <span1>종목</span1>
                <contentboxdiv>{item.event}</contentboxdiv>
                <span1>
                  <FaRegCalendarAlt className="calendar" />
                  날짜와 시간
                </span1>
                <contentboxdiv>{item.date}</contentboxdiv>
                <contentboxdiv>{item.time}</contentboxdiv>
                <span1>운동장소</span1>
                <contenttextdiv>
                  <HiLocationMarker className="location" />
                  {item.location}
                </contenttextdiv>
                <sidemap>{<Map />}</sidemap>
              </Viewinputdiv>

              <Postinputdiv>
                <joindiv>모집인원</joindiv>
                <joinpeplecountdiv>모집중</joinpeplecountdiv>
                <joinpeplediv>
                  <joinpeoplebox>
                    <joinpeoplimg>
                      <img src={item.image} alt="imgefile"></img>
                    </joinpeoplimg>
                    <joinpeoplname>{item.nickname}</joinpeoplname>
                  </joinpeoplebox>
                </joinpeplediv>
              </Postinputdiv>
            </Contnentdiv>
          </div>
        ))}
        <Postbuttondiv onClick={openModal}>모임 참가하기</Postbuttondiv>
      </Postupdiv>
    </>
  );
}

const Postupdiv = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  border: solid 1px rgba(0, 0, 0, 0.7);
  box-shadow: 5px 5px 5px 5px gray;
  padding-top: 20px;
  sprotsnamediv {
    font-weight: bold;
    font-size: 30px;
  }
  i {
    position: absolute;
    top: 10px;
    right: 15px;
    color: black;
  }
`;

const Contnentdiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
`;

const Viewinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  text-align: left;
  sidemap {
    width: 300px;
    padding: 0px 20px;
    height: 140px;
  }
  span1 {
    margin: 10px 0px 10px 20px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
  }
  contentboxdiv {
    width: 300px;
    height: 45px;
    border: solid 1px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    font-size: 20px;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 0px 15px;
    box-shadow: 5px 5px 5px 5px gray;
  }
  contenttextdiv {
    width: 300px;
    margin: 0px 0px 10px 40px;
    font-size: 10px;
  }
`;

const Postinputdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 20px 30px;
  joindiv {
    font-size: 20px;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
  }
  joinpeplecountdiv {
    font-size: 10px;
  }
  joinpeplediv {
    display: flex;
    flex-direction: column;
    text-align: left;
    joinpeoplebox {
      display: flex;
      flex-direction: row;
      margin: 10px 0px 10px 0px;
      joinpeoplname {
      }
      joinpeoplimg {
        width: 40px;
        height: 40px;
        border-radius: 100px;
      }
    }
  }
`;

const Postbuttondiv = styled.button`
  /* background-color: yellow; */
  width: 100%;
  height: 60px;
  font-weight: bold;
  border: none;
  border-radius: 0 0 10px 10px;
  color: white;
  font-size: 30px;
  background-color: #ff4c29;
`;
export default PostDetail;

// <MainBox>
//   <Main>
//     <Header>농구하실 분 구해요~~</Header>
//     <MiddleBox>
//       <LeftBox>
//         <EventsBox>
//           <span className="Events">종목</span>
//           <Events>농구</Events>
//         </EventsBox>
//         <DateTimeBox>
//           <span>날짜와 시간</span>
//           <Date>
//             <FaRegCalendarAlt className="calendar" />
//             2023년 1월 22일
//           </Date>
//           <Time>
//             <FcAlarmClock className="clock" />
//             19:00시쯤
//           </Time>
//         </DateTimeBox>
//         <MapBox>
//           <span>운동종목</span>
//           <MapContents>
//             <span>
//               <HiLocationMarker className="location" />
//               한강 시민공원 농구장
//             </span>
//             <Place>
//               <Map />
//             </Place>
//           </MapContents>
//         </MapBox>
//       </LeftBox>
//       <RightBox>
//         <PeopleBox>
//           <PartyPeople>
//             <span className="people">모집인원</span>
//           </PartyPeople>
//           <Party>
//             <span className="Continue">모집중</span>
//             <span className="PartyCount">5/10</span>
//           </Party>
//           <People>
//             <PeopleImage />
//             <Who>
//               <span>누구</span>
//             </Who>
//           </People>
//         </PeopleBox>
//       </RightBox>
//     </MiddleBox>
//     <BottomBox>
//       <AttendButton>모임 참가하기</AttendButton>
//     </BottomBox>
//   </Main>
// </MainBox>

// const Rotate = keyframes`
// 0%{
//     transform: rotate(0deg);
//     border-radius: 0px;
// }
// 50%{
//     border-radius: 100px;
// }
// 100%{
//     transform: rotate(350deg);
//     border-radius: 0px;
// }
// `;

// const MainBox = styled.div`
//   width: 100%;
// `;
// const Main = styled.div`
//   box-sizing: border-box;

//   position: relative;
//   width: 630px;
//   height: auto;

//   background: #ffffff;
//   border: 1px solid #000000;
//   border-radius: 25px;

//   margin-left: 450px;
//   margin-bottom: 50px;
// `;
// const Header = styled.div`
//   margin-right: 240px;
//   margin-top: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.6rem;
//   font-weight: bold;
//   position: relative;
//   .Basketball {
//     color: red;
//     margin-right: 25px;
//     margin-bottom: 20px;
//   }

//   animation: ${Rotate} 0.9s linear 1;
// `;
// const LeftBox = styled.div`
//   margin-left: 75px;
// `;

// const MiddleBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   .people {
//     overflow: hiddlen;
//     white-space: nowrap;
//   }
// `;

// const Events = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);

//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;
//   color: #000000;

//   margin-top: 13px;
//   margin-bottom: 37px;

//   .Basketball2 {
//     color: red;
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;
// const EventsBox = styled.div`
//   margin-right: 80px;
//   margin-top: 28px;
//   position: relative;
// `;
// const Date = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;

//   color: #000000;
//   position: relative;

//   margin-top: 13px;
//   margin-bottom: 24px;
// `;
// const Time = styled.div`
//   box-sizing: border-box;
//   width: 340px;
//   height: 50px;
//   background-image: linear-gradient(
//     to right top,
//     #ffffff,
//     #fcfcfc,
//     #f9f9f9,
//     #f6f6f6,
//     #f3f3f3
//   );
//   border: 1px solid rgba(0, 0, 0, 0.2);
//   border-radius: 5px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 1rem;
//   line-height: 105px;
//   display: flex;
//   align-items: center;
//   position: relative;
//   color: #000000;

//   margin-bottom: 37px;
// `;
// const DateTimeBox = styled.div`
//   position: relative;
//   .calendar {
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
//   .clock {
//     margin-left: 12px;
//     margin-right: 10px;
//     width: 1.5rem;
//     height: 1.5rem;
//   }
// `;
// const Place = styled.div`
//   box-sizing: border-box;

//   width: 340px;
//   height: 150px;

//   background: url(.jpg), #ffffff;
//   border: 1px solid #000000;

//   border-radius: 5px;
//   position: relative;
//   .map {
//   }

//   margin-bottom: 28px;
// `;
// const MapBox = styled.div``;

// const RightBox = styled.div`
//   display: flex;
//   justify-content: center;

//   margin-bottom: 300px;
//   margin-right: 100px;
// `;
// const PeopleImage = styled.div`
//   width: 2.3rem;
//   height: 2.3rem;
//   border-radius: 70%;
//   overflow: hidden;
//   background-color: green;
// `;

// const People = styled.div`
//   display: flex;
//   font-size: 1rem;
//   margin-bottom: 10px;
//   bottom: 5px;
// `;

// const AttendButton = styled.button`
//   display: flex;
//   align-items: center;
//   margin: auto;
//   width: 630px;
//   height: 60px;

//   background: linear-gradient(195deg, #ff4c29, #f4a393);
//   border-radius: 0px 0px 25px 25px;

//   font-family: "Poppins";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 0.8rem;
//   line-height: 48px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   color: #f9fbff;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     transition: all 1.1s;
//     background-color: rgb(196, 60, 33);
//   }
// `;
// const BottomBox = styled.div``;
// const PeopleBox = styled.div``;
// const Party = styled.div`
//   white-space: nowrap;
//   margin-bottom: 20px;
//   .Continue {
//     font-size: 0.8rem;
//     margin-right: 55px;
//   }
//   .PartyCount {
//   }
// `;
// const PartyPeople = styled.div`
//   margin-bottom: 20px;
//   font-weight: bold;

//   .people {
//   }
// `;

// const MapContents = styled.div`
//   margin-top: 11px;
//   font-size: 0.9rem;
//   .location {
//     width: 0.9rem;
//     height: 0.9rem;
//     margin-right: 3px;
//   }
// `;

// const Who = styled.div`
//   margin-top: 10px;
//   margin-left: 13px;
//   font-size: 1rem;
//   font-weight: bold;
// `;
