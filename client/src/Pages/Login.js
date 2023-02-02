import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { authActions } from "../Redux/auth";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-top : 100px;
`;

const Input = styled.input`
  margin: 1vw;
  padding: 1.8vw;
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
  background-color: #ff4c29;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
`;

const HrefRight = styled.a`
  display: flex;
  justify-content: right;
  margin-right: 15px;
  margin-bottom: 20px;
  font-size: 18px;
`;

const LoginFont = styled.span`
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  display: flex;
  margin-left: 15px;

  .emailalert {
    color: red;
    display: block;
  }

  .passwordalert {
    color: red;
  }
`;

function Login() {
  const [login, setLogin] = useState({
    email: "",
    newpassword: "",
  });

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isClicked: false,
    isPreviospassword: false,
  });

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  useEffect(() => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(login.email)) {
      setIsValid({ ...isValid, isEmail: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isEmail: true });
    }
  }, [login.email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(login.newpassword)) {
      setIsValid({ ...isValid, isPassword: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isPassword: true });
    }
  }, [login.newpassword]);

  function Clicked() {
    setIsValid({ ...isValid, isClicked: true });
  }

  function Print() {
    console.log(isValid.isEmail);
  }

  const Emailalert = () => {
    return login.email === ""
      ? null
      : isValid.isClicked === false
      ? null
      : isValid.isEmail === true
      ? null
      : "이메일 형식에 맞지 않습니다.";
  };

  const Passwordalert = () => {
    return login.newpassword === ""
      ? null
      : isValid.isClicked === false
      ? null
      : isValid.isPassword === true
      ? null
      : "비밀번호 형식에 맞지 않습니다.";
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tokenCookie, setTokenCookie] = useCookies(["Authorization"]);
  const [refreshCookie, setRefreshCookie] = useCookies(["Refresh"]);
  const [memberIdCookie, setMemberIdCookie] = useCookies(["memberId"]);

  const loginSubmitHandler = (event) => {
    if (isValid.isEmail && isValid.isPassword) {
      const reqBody = {
        email: login.email,
        password: login.newpassword,
      };
      const sendLoginReq = async () => {
        try {
          const response = await axios.post("http://ec2-54-180-138-46.ap-northeast-2.compute.amazonaws.com:8080/login", reqBody);
          const jwtToken = response.headers.get("Authorization");
          const refreshToken = response.headers.get("Refresh");
          const memberId = response.data.memberId;

          setTokenCookie("Authorization", jwtToken, {
            maxAge: 60 * 30000,
          }); // 60초 * 30000분
          localStorage.clear()
          window.localStorage.setItem(
            "Authorization",
            JSON.stringify({ jwtToken })
          );
          setRefreshCookie("Refresh", refreshToken, {
            maxAge: 60 * 30000,
          }); // 60초 * 30000분
          setMemberIdCookie("memberId", memberId, { maxAge: 60 * 30000 });
          if (tokenCookie && memberIdCookie && refreshCookie) {
            dispatch(authActions.login());
          }
          setTimeout(() => {
            navigate("/");
            window.location.reload();
            
          }, 250);
        } catch (error) {
          console.log(error);
          alert("인증에 실패했습니다.");
          console.log(reqBody);
        }
      };
      sendLoginReq();
    }
  };

  return (
    <LoginContainer>
      <Form>
        <LoginHeader><h2>로그인</h2></LoginHeader>
        <LoginFont>&nbsp;&nbsp;&nbsp;이메일</LoginFont>
        <Input
          name="email"
          type="text"
          value={login.email}
          placeholder="이메일을 입력해주세요"
          onChange={onChangeLogin}
        />
        <LoginFont>&nbsp;&nbsp;&nbsp;비밀번호</LoginFont>

    <Input
      name="newpassword"
      type="password"
      value={login.newpassword}
      placeholder = '비밀번호를 입력해주세요'
      onChange={onChangeLogin}
    />
    <br />
    <ErrorMessage>
      
      <span className = 'emailalert'>
      {Emailalert()}
      </span> &nbsp;&nbsp;
      <span className = 'passwordalert'>
      {Passwordalert()}
      </span>
      
    </ErrorMessage>
  
    <Button
    onClick = {()=> {
      
      Clicked();
      loginSubmitHandler()
    }}
    >
      로그인
      </Button>
     
    <HrefRight>처음이신가요?&nbsp;<a href = "/signup"> 시작하기 </a></HrefRight>

    </Form>
    
    </LoginContainer>
  );
}

export default Login;
