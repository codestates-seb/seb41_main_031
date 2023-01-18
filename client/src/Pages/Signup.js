import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;  
  width: 100vw;
`;

const Form = styled.form`
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
  background-color: #FF4C29;
  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

const SignupHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
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
 `

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // do something with email, password, and nickname 
    console.log('email', email);
    console.log('password', password);
    console.log('nickname', nickName);
     // Check the entered username and password against a list of valid credentials
     if (nickName === 'admin' && password === 'password' && email === 'admin@gmail.com') {
      // Redirect the user to the logged-in version of the app
      window.location.replace('/login');
    } else {
      // Display an error message to the user
     setErrorMessage('닉네임은 admin, 이메일은 admin@gmail.com, 비밀번호는 password이어야 합니다.');
    }
  }
// 입력 후 데이터셋 저장   
// 회원가입 성공 시 로그인 창으로 이동 
// 회원가입 실패 시 에러 처리 (유효성 검사) 개발 
  return (
    <SignupContainer>
    <Form onSubmit={handleSubmit}>
    <SignupHeader> 
    <h2>아무나에 오신 걸 환영합니다.<br />사람들과의 연결을 경험해보세요!</h2>
    </SignupHeader>  
        <SignupFont>&nbsp;&nbsp;&nbsp;닉네임</SignupFont>
        <Input
          type="nickname"
          value={nickName}
          onChange={e => setNickName(e.target.value)}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;이메일</SignupFont>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <SignupFont>&nbsp;&nbsp;&nbsp;비밀번호</SignupFont>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <br /> 
      <ErrorMessage>{errorMessage && <div style={{ color: 'red' }}>  
      {errorMessage}</div>}</ErrorMessage>
      <Button type="submit">회원가입하기</Button>
      <HrefRight>이미 계정이 있으세요?&nbsp;&nbsp;<a href = "login">로그인하기</a></HrefRight>
    </Form>
    </SignupContainer>
  );
}

export default Signup;