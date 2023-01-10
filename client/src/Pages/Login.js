// import React from "react";
// import styled from "styled-components";
// const LoginContainer = styled.div`
// `
// const LoginButtonColor = styled.button`
//     background-color: blue;
//     border-color: blue;

// `
//     function LoginForm(){
//     return <LoginContainer>
//             <div>아무나에 오신 걸 환영합니다.</div>
//             <div>사람들과의 연결을 경험해보세요!</div>
//             <div>Email</div>
//             <input type="text" placeholder="이메일을 입력해주세요"></input><br></br>
//             <div>Password</div>
//             <input type="password" placeholder="비밀번호를 입력해주세요"></input><br></br>
//             <LoginButton />
//           </LoginContainer>
//     } 

//     function LoginButton(){
//         return <LoginButtonColor>
//             <button id="LoginButton">Login</button>
//             </LoginButtonColor>
//     }



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
  align-items: center;
  width: 400px;
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
      setErrorMessage('Invalid username or password');
    }
  }

  // const Greeting = styled.div`
  //   justify-content: center;
  // `
 
  return (
    <LoginContainer>
    <Form onSubmit={handleSubmit}>
    <h2>아무나에 오신 걸 환영합니다. <br></br>
    사람들과의 연결을 경험해보세요!</h2>
      <label>
        이메일 :
        <Input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        비밀번호 :
        <Input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <Button type="submit">Log in</Button>
    </Form>
    </LoginContainer>
  );
}
    //admin과 password 입력하면 localhost:3000/dashboard로 이동함 

    // send a request to your backend to check the user's credentials
    // if the login is successful, you can redirect the user to another page or show a success message
    // if the login fails, you can update the component's state to display an error message

    export default Login;
