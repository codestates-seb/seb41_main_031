import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../Redux/auth";
import { useCookies } from "react-cookie";

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
  background-color: #ff4c29;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

const SignupHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
`;
const HrefRight = styled.a`
  display: flex;
  justify-content: right;
  margin-right: 15px;
  margin-bottom: 60px;
  font-size: 18px;
`;
const SignupFont = styled.span`
  font-size: 18px;
`;
const ErrorMessage = styled.div`
  display: flex;
  margin-left: 15px;

  .emailalert {
    color: red;
  }

  .passwordalert {
    color: red;
  }
`;

function Signup() {
  const [signup, setSignup] = useState({
    email: "",
    newpassword: "",
    nickname: "",
  });

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isClicked: false,
    isPreviospassword: false,
  });

  const onChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  useEffect(() => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(signup.email)) {
      setIsValid({ ...isValid, isEmail: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isEmail: true });
    }
  }, [signup.email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(signup.newpassword)) {
      setIsValid({ ...isValid, isPassword: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isPassword: true });
    }
  }, [signup.newpassword]);

  const Emailalert = () => {
    return signup.email === ""
      ? null
      : isValid.isClicked === false
      ? null
      : isValid.isEmail === true
      ? null
      : "이메일 형식에 맞지 않습니다.";
  };

  const Passwordalert = () => {
    return signup.newpassword === ""
      ? null
      : isValid.isClicked === false
      ? null
      : isValid.isPassword === true
      ? null
      : "비밀번호 형식에 맞지 않습니다.";
  };
  function Clicked() {
    setIsValid({ ...isValid, isClicked: true });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const reqLoginBody = {
    username: signup.email,
    password: signup.newpassword,
  };
  const [tokenCookie, setTokenCookie] = useCookies(["Authorization"]);
  const [refreshCookie, setRefreshCookie] = useCookies(["Refresh"]);
  const [memberIdCookie, setMemberIdCookie] = useCookies(["memberId"]);

  const sendLoginReq = async () => {
    try {
      const response = await axios.post("/login", reqLoginBody);
      const jwtToken = response.headers.get("Authorization");
      const refreshToken = response.headers.get("Refresh");
      const memberId = response.data.memberId;
      setTokenCookie("Authorization", jwtToken, {
        maxAge: 60 * 30000,
      }); // 60초 * 30000분
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
    }
  };

  const Signuphandler = (event) => {
    if (isValid.isEmail && isValid.isPassword && signup.nickname !== "") {
      const reqSignupBody = {
        email: signup.email,
        password: signup.newpassword,
        nickname: signup.nickname,
      };

      const sendSignUpReq = async () => {
        try {
          const response = await axios.post("/members", reqSignupBody);
          if (response.status === 201) {
            alert("환영합니다.");
            sendLoginReq();
          }
        } catch (error) {
          console.log(error);
          alert("잘못된 요청입니다.");
          console.log(reqSignupBody);
        }
      };
      sendSignUpReq();
    }
  };

  return (
    <SignupContainer>
      <Form>
        <SignupHeader>
          <h2>
            아무나에 오신 걸 환영합니다.
            <br />
            사람들과의 연결을 경험해보세요!
          </h2>
        </SignupHeader>
        <SignupFont>&nbsp;&nbsp;&nbsp;닉네임</SignupFont>
        <Input
          type="nickname"
          name="nickname"
          value={signup.nickname}
          onChange={onChangeSignup}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;이메일</SignupFont>
        <Input
          type="email"
          name="email"
          value={signup.login}
          onChange={onChangeSignup}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;비밀번호</SignupFont>
        <Input
          type="password"
          name="newpassword"
          value={signup.newpassword}
          onChange={onChangeSignup}
        />
        <br />
        <ErrorMessage>
          <span className="emailalert">{Emailalert()}</span>
          <span className="passwordalert">
            &nbsp;&nbsp;
            {Passwordalert()}
          </span>
        </ErrorMessage>
        <Button
          onClick={() => {
            Clicked();
            Signuphandler();
          }}
        >
          회원가입하기
        </Button>
        <HrefRight>
          이미 계정이 있으세요?&nbsp;&nbsp;<a href="/Login/">로그인하기</a>
        </HrefRight>
      </Form>
    </SignupContainer>
  );
}

export default Signup;
