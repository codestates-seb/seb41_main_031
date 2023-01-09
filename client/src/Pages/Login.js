import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
`
const LoginButtonColor = styled.button`
    background-color: blue;
    border-color: blue;

`
    function Login(){
    return <LoginContainer>
            <div>아무나에 오신 걸 환영합니다.</div>
            <div>사람들과의 연결을 경험해보세요!</div>
            <div>Email</div>
            <input type="text" placeholder="이메일을 입력해주세요"></input><br></br>
            <div>Password</div>
            <input type="password" placeholder="비밀번호를 입력해주세요"></input><br></br>
            <LoginButton />
          </LoginContainer>
    } 

    function LoginButton(){
        return <LoginButtonColor>
            <button id="LoginButton">Login</button>
            </LoginButtonColor>
    }
  

    export default Login;
