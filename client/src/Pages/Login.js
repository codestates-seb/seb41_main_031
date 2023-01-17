import React, { useState } from "react";
import styled from "styled-components";
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
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
  background-color: #FF4C29;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
`

const HrefRight = styled.a`
    display: flex;
    justify-content: right;
    margin-right: 15px;
    margin-bottom: 20px;
    font-size: 18px;
`

const LoginFont = styled.span`
  font-size: 18px;
`

const ErrorMessage = styled.div`
display: flex;
margin-left: 15px;
`

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  function handleSubmit(event) {
    event.preventDefault();

    // Check the entered username and password against a list of valid credentials
    if (email === 'admin@gmail.com' && password === 'password') {
      // Redirect the user to the logged-in version of the app
      window.location.replace("/MainPage");
    } else {
      // Display an error message to the user
     setErrorMessage('이메일은 admin@gmail.com, 비밀번호는 password입니다.');
    }
  }

  return (
    <LoginContainer>
    <Form onSubmit={handleSubmit}>
    <LoginHeader> 
    <h2>아무나에 오신 걸 환영합니다.<br />사람들과의 연결을 경험해보세요!</h2>
    </LoginHeader> 
    <LoginFont>&nbsp;&nbsp;&nbsp;이메일</LoginFont>
    <Input
      type="text"
      value={email}
      onChange={event => setEmail(event.target.value)}
    />
    <LoginFont>&nbsp;&nbsp;&nbsp;비밀번호</LoginFont>

    <Input
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />  
    <br />
    <ErrorMessage>{errorMessage && <div style={{ color: 'red' }}>
      {errorMessage}</div>}</ErrorMessage>
    <Button type="submit">로그인</Button>
    <HrefRight>처음이신가요?&nbsp;<a href = "signup"> 시작하기 </a></HrefRight>
    </Form>
    </LoginContainer>
  );
};
//admin과 password 입력하면 localhost:3000/dashboard로 이동함
// send a request to your backend to check the user's credentials
// if the login is successful, you can redirect the user to another page or show a success message
// if the login fails, you can update the component's state to display an error message

export default Login;
