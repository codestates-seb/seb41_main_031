import styled from 'styled-components';
import React, { useState, useEffect,useRef } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import axios, { formToJSON } from "axios";
import { Link, useLoaderData, useNavigate,Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const Main = styled.div`
@media all and (max-width: 1100px){
	
  width : 80%;
  height : 80%;
}

."sc-ddKZzx kSrqZd"{
  width ; 
}
`
const LeftBox = styled.div`


` 

const Image = styled.img`
    width: 12rem;
    height: 12rem;; 
    border-radius: 70%;
    border : solid 2px;
    overflow: hidden;
    background-color : white;
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
 width: 280px;
 height: 40px;

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
 width: 280px;
 height: 40px;

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
   margin-bottom : 5px;

 `;
const Region = styled.input.attrs({
   type: "text",
   required: true,
   placeholder: "변경할 지역"
 })`

 box-sizing: border-box;
 width: 280px;
 height: 40px;

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


 `;

const PreviousPassword = styled.input.attrs({
  type: "password",
  required: true,
  placeholder: "이전 비밀번호를 입력해주세요"
})`
box-sizing: border-box;
 width: 400px;
 height: 45px;

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
width: 400px;
height: 45px;

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
margin-bottom : 50px;


`  
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
}


`
const BackButton = styled.button`
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
`

const PreviousPasswordBox = styled.div`

margin-top : 80px;
font-size : 0.7rem;


`
const NewPasswordBox = styled.div`
margin-top : 20px;
font-size :  0.7rem;

.passwordwrap{
  display: block
  display:flex;
  text-align : center;
  color : red;
    font-size : 1rem;
}
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
  margin-top : 8px;
  
}
`
const EmailBox = styled.div`
display: flex;
justify-content : center;
.Email{
  width: 80px;
  font-size : 1.1rem;
  margin-top : 8px;
  
}

.emailalert{
  color : red;
  font-size : 1rem;
  display:flex;
  justify-content : center;
  margin-bottom : 10px;
}

.emailwrap{
  display: block
}


`
const RegionBox= styled.div`
display: flex;
justify-content : center;
.Region{
  width: 80px;
  font-size : 1.1rem;
  margin-top : 8px;
  
}

`

const Input = styled.input`
  
`

function EditProfile() {



  const [form, setForm] = useState({
    nickname : '',
    email : '',
    region : '',
    previouspassword : '',
    newpassword : ''
  })

  const [isValid, setIsValid] = useState({
    isEmail : false,
    isPassword : false,
    isClicked : false,
    isPreviospassword : false
  })

 
  


  //이메일 정규식


  

  const Print = ()=>{
    
    console.log(form.region)
    console.log(form.newpassword)
    console.log(JSON.parse(auth).jwtToken)
    console.log(window.localStorage.getItem("Authorization"))
    
  }


  const onChangeprofile = (e) => {
    const { name, value } = e.target;   
    setForm({ ...form, [name]: value });
  };

  useEffect(()=>{
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    if(!emailRegex.test(form.email)){
      setIsValid({...isValid, isEmail: false})
      setIsValid({...isValid, isClicked: false}) // 정규식에 안맞으면 클릭상태 초기화
    } else{
      setIsValid({...isValid, isEmail : true})
    }
  },[form.email])

  useEffect(()=>{
    const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(!passwordRegex.test(form.newpassword)){
      setIsValid({...isValid, isPassword: false})
      setIsValid({...isValid, isClicked: false}) // 정규식에 안맞으면 클릭상태 초기화
    } else{
      setIsValid({...isValid, isPassword : true})
    }
  },[form.newpassword])

  


  function Clicked(){
  
    setIsValid({...isValid, isClicked: true})
    
}


const navigate = useNavigate();

const cookies = new Cookies();
  const accessToken = cookies.get('Authorization');
  const memberId = cookies.get('memberId');


const [data, setData] = useState([]);
const auth = window.localStorage.getItem("Authorization");

const getUser = async () => {
  try {
    const response = await axios.get(
      '/members/7',{

        headers : {
          Authorization: JSON.parse(auth).jwtToken
        }
      }
    );
    setData(response.data);
  } catch (error) {
    if (error.response) {
      // 요청이 전송되었고, 서버에서 20x 외의 코드로 응답 됨
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 요청이 전송되었지만, 응답이 수신되지 않음
      console.log(error.request);
    } else {
      // 오류가 발생한 요청을 설정하는 데 문제가 생김
      console.log('Error', error.message);
    }
    console.log(error.config);
  }
};



useEffect(() => {
  getUser();
}, []);





  const NicknameEdit = async () => {
    if (
      form.nickname!==''&&form.email===''&&form.region===''        //모두 입력했을 때
  &&form.previouspassword===''&&form.newpassword===''
    ) {
      if (window.confirm('닉네임을 변경하시겠습니까?')){
      try {
        await axios
          .patch(
            '/members/7',
            {
              nickname: form.nickname,
            },
            {  Authorization: JSON.parse(auth).jwtToken }
          )
          .then(() => {
            alert('닉네임 변경이 완료되었습니다');
            navigate('/mypage');
          });
      } catch (error) {
        if (error.response) {
          // 요청이 전송되었고, 서버에서 20x 외의 코드로 응답 됨
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return alert('Error');
          
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않음
          console.log(error.request);
          return alert('Error');
          
        } else {
          // 오류가 발생한 요청을 설정하는 데 문제가 생김
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
  }
  };


  const EmailEdit = async () => {
    if (
      (form.nickname===''&&form.email!==''&&form.region===''      
    &&form.previouspassword===''&&form.newpassword==='')&&isValid.isEmail
    ) {
      if (window.confirm('이메일을 변경하시겠습니까?')){
      try {
        await axios
          .patch(
            `/members/${memberId}`,
            {
              email: form.email,
            },
            { headers: { Authorization: accessToken } }
          )
          .then(() => {
            alert('이메일 변경이 완료되었습니다');
            navigate('/mypage');
          });
      } catch (error) {
        if (error.response) {
          // 요청이 전송되었고, 서버에서 20x 외의 코드로 응답 됨
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return alert('Error');
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않음
          console.log(error.request);
          return alert('Error');
        } else {
          // 오류가 발생한 요청을 설정하는 데 문제가 생김
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
  }
  };



  const RegionEdit = async () => {
    if (
      form.nickname===''&&form.email===''&&form.region!==''        //모두 입력했을 때
    &&form.previouspassword===''&&form.newpassword===''
    ) {
      if (window.confirm('지역을 변경하시겠습니까?')){
      try {
        await axios
          .patch(
            `/members/7`,
            {
              Region: form.region,
            },
            { headers: { Authorization: accessToken } }
          )
          .then(() => {
            alert('지역 변경이 완료되었습니다');
            navigate('/mypage');
          });
      } catch (error) {
        if (error.response) {
          // 요청이 전송되었고, 서버에서 20x 외의 코드로 응답 됨
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return alert('Error');
        } else if (error.request) {
          // 요청이 전송되었지만, 응답이 수신되지 않음
          console.log(error.request);
          return alert('Error');
        } else {
          // 오류가 발생한 요청을 설정하는 데 문제가 생김
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    }
  }
  };


    const PasswordEdit = () => 

  {
    
    if(form.nickname===''&&form.email===''&&form.region===''        //모두 입력했을 때
    &&form.previouspassword!==''&&form.newpassword!==''){  
      if (window.confirm('비밀번호를 변경하시겠습니까?')) {
    
        if((form.newpassword === data.password)&&isValid.isPassword){
          alert('예전 비밀번호와 같습니다. 다시 입력해주세요')
        }

        if((form.previouspassword !== data.password)&&isValid.isPassword){
          alert('예전 비밀번호와 입력한 비밀번호가 다릅니다. 다시 입력해주세요')
        }
  
      if(!(form.newpassword === data.password)&&(form.previouspassword === data.password)&&isValid.isPassword)
      {
        setTimeout(function (){
          axios
          .patch(`http://localhost:5500/data/${1}`,{
            
            Password : form.password
  
          })
          .then(() => {
            window.location.reload();
            alert('비밀번호 변경이 완료되었습니다.');
            navigate('/mypage/editprofile');
          })
          .catch((err) => alert(err.response.data.message));
        }, 3000)
        } 
        }
  
    }  
    }
  const Emailalert = ()=> {
    return (
      form.email ===''
                ? null
          : isValid.isClicked === false?
           null : isValid.isEmail === true?
            null:'이메일 형식에 맞지 않습니다.'
    )
  }

  const Passwordalert = ()=>{
    return (form.newpassword ===''
                ? null
          : isValid.isClicked === false?
           null : isValid.isPassword === true?
           null:'비밀번호 형식에 맞지 않습니다.')
  }
  

  const [image, setImage] = useState("https://static.toss.im/cashtag/image/2b1d7d75ba42d44329eb")
  const [file, setFile] = useState([]);
  const fileInput = useRef(null)

  const onChangeImage = (e) => {
    if(e.target.files[0]){
              setFile(e.target.files[0])
          }else{ //업로드 취소할 시
              setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
              return
          }
    //화면에 프로필 사진 표시
          const reader = new FileReader();
          reader.onload = () => {
              if(reader.readyState === 2){
                  setImage(reader.result)
              }
          }
          reader.readAsDataURL(e.target.files[0])
      }

      <input 
 	    type='file' 
    	style={{display:'none'}}
        accept='image/jpg,impge/png,image/jpeg' 
        name='profile_img'
        onChange={onChangeImage}
        ref={fileInput}/>
return(
    <Main>
     <MiddleBox>   
     <LeftBox>
        <Image
        src={image} 
        onClick={()=>{fileInput.current.click()}}
        > 
       
        </Image>
     </LeftBox>
     <RightBox>
      <InformBox>
      <NicknameBox>
        <span className = 'Nickname'>닉네임: </span> 
        <Nickname
        name = "nickname"
        value= {form.nickname}
        onChange = {
          onChangeprofile
          }
        >

        </Nickname>
      </NicknameBox>
        <EmailBox>
          <span className = 'Email'>이메일: </span>
          <div className = 'emailwrap'>
          <Email
          name = "email"
          value= {form.email}
          onChange = {
            onChangeprofile
            }
          ></Email>
          <span className = 'emailalert'>
          {Emailalert()} 
            </span>
            </div>
       </EmailBox>
       <RegionBox>
       <span className = 'Region'>지역: </span>
       <Region
       name = "region"
       value= {form.region}
       onChange = {
         onChangeprofile
         }
       />
       </RegionBox>
      </InformBox>
      <PreviousPasswordBox>
          <span className = 'Previous'>이전 비밀번호</span>
          <PreviousPassword
          name = "previouspassword"
          value= {form.previouspassword}
          onChange = {
            onChangeprofile
            }
          />
        </PreviousPasswordBox>
        <NewPasswordBox>
          <span className ='New'>새로운 비밀번호</span>
          <div className = 'passwordwrap'>
          <NewPassword
          name = "newpassword"
          value= {form.newpassword}
          onChange = {
            onChangeprofile
            }
          />

<span className = 'passwordalert'>
          {Passwordalert()}
            </span>
            </div>
        </NewPasswordBox>
        
     </RightBox>
     </MiddleBox>
     <BottomBox>
        <EditButton 
        onClick = {()=> 
        { NicknameEdit()
          EmailEdit()
          RegionEdit()
          PasswordEdit()
          Print()
          Clicked()
          
                  }}>
        프로필 변경하기</EditButton>
        <Link to = "/mypage">
        <BackButton>
          뒤로가기
          </BackButton>
        </Link>
     </BottomBox>
     
    </Main>
)
    
}

export default EditProfile;
