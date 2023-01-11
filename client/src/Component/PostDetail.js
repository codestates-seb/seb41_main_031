import styled from "styled-components";
import Map from "./Map";

const Main = styled.div`
  width: 1440px;
`;
const Header = styled.div``;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const Events = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 208px;
  left: 89px;
  top: 545px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.63);

  border-radius: 35px;

  width: 200px;
  height: 50px;
  left: 97px;
  top: 545px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 105px;
  display: flex;
  align-items: center;

  color: #000000;
`;
const EventsBox = styled.div``;
const Date = styled.div``;
const Time = styled.div``;
const DateTimeBox = styled.div``;
const Place = styled.div`
  .map {
    height: 50px;
  }
`;
const MapBox = styled.div``;

const RightBox = styled.div`
  float: right;
`;
const People = styled.div``;
const PeopleBox = styled.div``;

const AttendButton = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  width: 1440px;
  height: 45.55px;

  background: #ff4c29;
  border-radius: 15px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f9fbff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 1.1s;
    background-color: rgb(196, 60, 33);
  }
`;
const BottomBox = styled.div``;

function QuestionUp() {
  return (
    <Main>
      <Header>농구하실 분 구해요~~</Header>
      <LeftBox>
        <EventsBox>
          <span>종목</span>
          <Events>농구</Events>
        </EventsBox>
        <DateTimeBox>
          <Date>2023년 1월 22일</Date>
          <Time>19:00시쯤</Time>
        </DateTimeBox>
        <MapBox>
          <span>운동종목</span>
          <span>한강 시민공원 농구장</span>
          <Place>
            <Map className="map" />
          </Place>
        </MapBox>
      </LeftBox>
      <RightBox>
        <PeopleBox>
          <span>모집인원</span>
          <span>모집중</span> <span>5/10</span>
          <People>1</People>
          <People>2</People>
          <People>3</People>
          <People>4</People>
          <People>5</People>
        </PeopleBox>
      </RightBox>
      <BottomBox>
        <AttendButton>모임 참가하기</AttendButton>
      </BottomBox>
    </Main>
  );
}

export default QuestionUp;
