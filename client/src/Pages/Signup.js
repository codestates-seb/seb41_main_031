import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../Redux/auth';
import { useCookies } from 'react-cookie';



const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  
  width: 100vw;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-top : 100px;
`;

const Input = styled.input`
  margin: 1vw;
  padding: 2vw;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Button = styled.button`
  margin: 1vw;
  padding: 2vw;
  font-size: 16px;
  color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #FF4C29;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

const SignupHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`
const HrefRight = styled.a`
    display: flex;
    justify-content: right;
    margin-right: 15px;
    margin-bottom: 60px;
    font-size: 18px;
`
const SignupFont = styled.span`
  font-size: 18px;
`
 const ErrorMessage = styled.div`
    display: flex;
    margin-left: 15px;

.emailalert{
  color : red;
}

.passwordalert{
  color : red;
}
 `

function Signup() {
  
  const [signup, setSignup] = useState({
    email: '',
    newpassword: '',
    nickname: ''
  }); 

  const [isValid, setIsValid] = useState({
    isEmail : false,
    isPassword : false,
    isClicked : false,
    isPreviospassword : false
  })

  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };


  useEffect(()=>{
    const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    if(!emailRegex.test(signup.email)){
      setIsValid({...isValid, isEmail: false})
      setIsValid({...isValid, isClicked: false}) // ???????????? ???????????? ???????????? ?????????
    } else{
      setIsValid({...isValid, isEmail : true})
    }
  },[signup.email])

  useEffect(()=>{
    const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    if(!passwordRegex.test(signup.newpassword)){
      setIsValid({...isValid, isPassword: false})
      setIsValid({...isValid, isClicked: false}) // ???????????? ???????????? ???????????? ?????????
    } else{
      setIsValid({...isValid, isPassword : true})
    }
  },[signup.newpassword])


  const Emailalert = ()=> {
    return (
      signup.email ===''
                ? null
          : isValid.isClicked === false?
           null : isValid.isEmail === true?
            null:'????????? ????????? ?????? ????????????.'
    )
  }
  
  const Passwordalert = ()=>{
    return (signup.newpassword ===''
                ? null
          : isValid.isClicked === false?
           null : isValid.isPassword === true?
           null:'???????????? ????????? ?????? ????????????.')
  }
function Clicked(){
  
    setIsValid({...isValid, isClicked: true})
    
}


const navigate = useNavigate();
  const dispatch = useDispatch();

  const reqLoginBody = {
    username: signup.email,
    password: signup.newpassword,
  };
  const [tokenCookie, setTokenCookie] = useCookies(['Authorization']);
  const [refreshCookie, setRefreshCookie] = useCookies(['Refresh']);
  const [memberIdCookie, setMemberIdCookie] = useCookies(['memberId']);

  const sendLoginReq = async () => {
    try {
      const response = await axios.post(
        'http://ec2-54-180-138-46.ap-northeast-2.compute.amazonaws.com:8080/login',
        reqLoginBody
      );
      const jwtToken = response.headers.get('Authorization');
      const refreshToken = response.headers.get('Refresh');
      const memberId = response.data.memberId;
      setTokenCookie('Authorization', jwtToken, {
        maxAge: 60 * 30000,
      }); // 60??? * 30000???
      setRefreshCookie('Refresh', refreshToken, {
        maxAge: 60 * 30000,
      }); // 60??? * 30000???
      setMemberIdCookie('memberId', memberId, { maxAge: 60 * 30000 });
      if (tokenCookie && memberIdCookie && refreshCookie) {
        dispatch(authActions.login());
      }
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 250);
    } catch (error) {
      console.log(error);
      
      alert('????????? ??????????????????.');
    }
  };


  const Signuphandler = (event) => {
    
    if (isValid.isEmail && isValid.isPassword&&signup.nickname !=='') {
      const reqSignupBody = {
        email: signup.email,
        password: signup.newpassword,
        nickname: signup.nickname
        
      };

      const sendSignUpReq = async () => {
        try { 
          const response = await axios.post(
            'http://ec2-54-180-138-46.ap-northeast-2.compute.amazonaws.com:8080/members',
            reqSignupBody
          );
          if (response.status === 201) {
            alert('???????????????.');
            sendLoginReq();
          }
        } catch (error) {
          console.log(error);
          alert('????????? ???????????????.');
          console.log(reqSignupBody)
        }
      };
      sendSignUpReq();
    }
  };
  
 


  return (
    <SignupContainer>
    <Form>
    <SignupHeader>
    <h2>????????????</h2>
    </SignupHeader>  
        <SignupFont>&nbsp;&nbsp;&nbsp;?????????</SignupFont>
        <Input
          type= "nickname"
          name = "nickname" 
          value={signup.nickname}
          placeholder="???????????? ??????????????????"
          onChange={onChangeSignup}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;?????????</SignupFont>
        <Input
          type="email"
          name="email"
          value={signup.login}
          placeholder="???????????? ??????????????????"
          onChange={onChangeSignup}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;????????????</SignupFont>
        <Input
          type="password"
          name="newpassword"
          value={signup.newpassword}
          placeholder="??????????????? ??????????????????"
          onChange={onChangeSignup}
        />
      <br /> 
      <ErrorMessage>
        <span className = 'emailalert'>
        {Emailalert()}
        </span>
        <span className = 'passwordalert'>&nbsp;&nbsp;
        {Passwordalert()}
        </span>
      </ErrorMessage>
      <Button
      onClick = {()=>{
        Clicked()
        Signuphandler()
      }}
      >??????????????????</Button>
      <HrefRight>?????? ????????? ?????????????&nbsp;&nbsp;<a href = "login">???????????????</a></HrefRight>
    </Form>
    </SignupContainer>
  );
}

export default Signup;