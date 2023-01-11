import styled from 'styled-components';

const Main = styled.div`
width : 100%;
`
const LeftBox = styled.div`` 
const Image = styled.div`
    width: 17rem;
    height: 17rem;; 
    border-radius: 70%;
    overflow: hidden;
    background-color : green;
    margin-right : 80px;
    margin-bottom : 60px;
    
`
const RightBox = styled.div`
float : right;
margin-top : 90px;
`
const Nickname =  styled.input.attrs({
   type: "text",
   required: true,
   placeholder: "변경할 닉네임"
 })`
 box-sizing: border-box;
 width: 450px;
 height: 55px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 10px;
 
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
const Email = styled.input.attrs({
   type: "text",
   required: true,
   placeholder: "변경할 이메일"
 })`
 
 box-sizing: border-box;
 width: 450px;
 height: 55px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 10px;
 
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
const Region = styled.input.attrs({
   type: "text",
   required: true,
   placeholder: "변경할 지역"
 })`

 box-sizing: border-box;
 width: 450px;
 height: 55px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 10px;
 
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

const PreviousPassword = styled.input.attrs({
  type: "password",
  required: true,
  placeholder: "이전 비밀번호를 입력해주세요"
})`
box-sizing: border-box;
 width: 585px;
 height: 55px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 10px;

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
  margin-top : 10px;
  
  

`;
const NewPassword = styled.input.attrs({
  type: "password",
  required: true,
  placeholder: "새로운 비밀번호를 입력해주세요"
})`

box-sizing: border-box;
width: 585px;
 height: 55px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 10px;

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
  margin-top : 10px;

`;
const MiddleBox = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-left : 300px;
`
const BottomBox = styled.div`

margin-top : 50px;


`  
const EditButton = styled.button`
width: 600px;
height: 45.55px;

background-image: linear-gradient(to bottom, #2c394b, #2f515d, #3f6867, #5e7e6c, #879173);
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


`
const BackButton = styled.button`
display:flex;
align-items:center;
margin:auto;
width: 600px;
height: 45.55px;


background: #FF4C29;
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
`

const PreviousPasswordBox = styled.div`

margin-top : 80px;
font-size : 0.7rem;


`
const NewPasswordBox = styled.div`
margin-top : 20px;
font-size :  0.7rem;
`

const InformBox = styled.div`
margin-right : 350px;
margin-left : 60px;
`

const NicknameBox = styled.div `


display: flex;
justify-content : center;
.Nickname{
  width: 80px;
  font-size : 1.1rem;
  margin-top : 13.5px;
  
}
`
const EmailBox = styled.div`
display: flex;
justify-content : center;
.Email{
  width: 80px;
  font-size : 1.1rem;
  margin-top : 13.5px;
  
}


`
const RegionBox= styled.div`
display: flex;
justify-content : center;
.Region{
  width: 80px;
  font-size : 1.1rem;
  margin-top : 13.5px;
  
}



`


function EditProfile() {
return(
    <Main>
     <MiddleBox>   
     <LeftBox>
        <Image></Image>
     </LeftBox>
     <RightBox>
      <InformBox>
      <NicknameBox>
        <span className = 'Nickname'>닉네임: </span> 
        <Nickname></Nickname>
      </NicknameBox>
        <EmailBox>
          <span className = 'Email'>이메일: </span>
          <Email></Email>
       </EmailBox>
       <RegionBox>
       <span className = 'Region'>지역: </span>
       <Region></Region>
       </RegionBox>
      </InformBox>
      <PreviousPasswordBox>
          <span className = 'Previous'>이전 비밀번호</span>
          <PreviousPassword></PreviousPassword>
        </PreviousPasswordBox>
        <NewPasswordBox>
          <span className ='New'>새로운 비밀번호</span>
          <NewPassword></NewPassword>
        </NewPasswordBox>
     </RightBox>
     </MiddleBox>
     <BottomBox>
        <EditButton>프로필 변경하기</EditButton>
        <BackButton>뒤로가기</BackButton>
     </BottomBox>
     
    </Main>
)
    
}

export default EditProfile;
