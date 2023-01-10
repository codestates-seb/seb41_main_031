import React, { useState } from 'react';
import styled from "styled-components";
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 720px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 8px;
  font-size: 16px;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: rgba(30,30,255,0.75);
  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }
`;

const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`

const HrefRight = styled.a`
    display: flex;
    justify-content: right;
`

const Login = function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Check the entered username and password against a list of valid credentials
    if (username === 'admin' && password === 'password') {
      // Redirect the user to the logged-in version of the app
      window.location.replace('/MainPage');
    } else {
      // Display an error message to the user
      setErrorMessage('아이디 혹은 비밀번호가 정확하지 않습니다');
    }
  }
 
  return (
    <LoginContainer>
    <Form onSubmit={handleSubmit}>
    <LoginHeader> 
    <h2>아무나에 오신 걸 환영합니다.<br />사람들과의 연결을 경험해보세요!</h2>
    </LoginHeader> 
    <span>이메일</span> 
        <Input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
    <span>비밀번호</span>
        <Input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      
      <br />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <Button type="submit">로그인</Button>
   <HrefRight><a href = "Signup"> 처음이신가요? 시작하기 </a> </HrefRight>
    </Form>
    </LoginContainer>
  );
}
    //admin과 password 입력하면 localhost:3000/dashboard로 이동함 
    // send a request to your backend to check the user's credentials
    // if the login is successful, you can redirect the user to another page or show a success message
    // if the login fails, you can update the component's state to display an error message

    export default Login;
