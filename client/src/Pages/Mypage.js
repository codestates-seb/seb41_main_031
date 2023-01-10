import styled from 'styled-components';

const Main = styled.div`

`;
const LeftBox = styled.div`
float:left;
`;
const Image = styled.div`
width: 11rem;
    height: 11rem;; 
    border-radius: 70%;
    overflow: hidden;
    background-color : green;
    margin-right : 80px;
    margin-top : 33px;
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
font-size: 1rem;
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
font-size: 1rem;
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
font-size: 1rem;
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
font-size: 1rem;
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
font-size: 1rem;
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

`;
const EditButton = styled.button`


width: 400px;
height: 45.55px;

background: #2C394B;
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
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

`;
const WithdrawButton = styled.button`
display:flex;
align-items:center;
margin:auto;
width: 400px;
height: 45.55px;


background: #FF4C29;
border-radius: 15px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 48px;
display: flex;
align-items: center;
text-align: center;

color: #F9FBFF;

display: flex;
  justify-content: center;
  align-items: center;

`;

const MiddleBox = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
`

function Mypage() {
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
      <EditButton>프로필 수정</EditButton>
      <WithdrawButton>탈퇴하기</WithdrawButton>
    </BottomBox>
  </Main>
  
  )
}

export default Mypage;












