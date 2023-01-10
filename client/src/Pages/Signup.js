// import React, { useState } from 'react';
// import styled from "styled-components";
// const LoginContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;  
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 720px;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 8px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   margin: 10px 0;
//   padding: 8px;
//   font-size: 16px;
//   color: white;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   background-color: rgba(30,30,255,0.75);
//   &:hover {
//     cursor: pointer;
//     background-color: #ddd;
//   }
// `;

// const LoginHeader = styled.h2`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 100px;
// `

// const Signup = function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   function handleSubmit(event) {
//     event.preventDefault();

//     // Check the entered username and password against a list of valid credentials
//     if (username === 'admin' && password === 'password') {
//       // Redirect the user to the logged-in version of the app
//       window.location.replace('/MainPage');
//     } else {
//       // Display an error message to the user
//       setErrorMessage('Invalid username or password');
//     }
//   }
 
//   return (
//     <LoginContainer>
//     <Form onSubmit={handleSubmit}>
//     <LoginHeader> 
//     <h2>아무나에 오신 걸 환영합니다.<br />사람들과의 연결을 경험해보세요!</h2>
//     </LoginHeader> 
//     <span>Email</span> 
//         <Input
//           type="text"
//           value={username}
//           onChange={event => setUsername(event.target.value)}
//         />
//     <span>Password</span>
//         <Input
//           type="password"
//           value={password}
//           onChange={event => setPassword(event.target.value)}
//         />
      
//       <br />
//       {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
//       <Button type="submit">회원가입하기</Button>
//    <a href = "Login"> 아이디가 이미 있으신가요? 로그인하기 </a> 
//     </Form>
//     </LoginContainer>
//   );
// }
    //admin과 password 입력하면 localhost:3000/dashboard로 이동함 

    // send a request to your backend to check the user's credentials
    // if the login is successful, you can redirect the user to another page or show a success message
    // if the login fails, you can update the component's state to display an error message

import React, { useState } from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
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

const SignupHeader = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`
const HrefRight = styled.a`
    display: flex;
    justify-content: right;
`

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // do something with email and password
    console.log('email', email);
    console.log('password', password);
  }

  return (
    <SignupContainer>
    <Form onSubmit={handleSubmit}>
    <SignupHeader> 
    <h2>아무나에 오신 걸 환영합니다.<br />사람들과의 연결을 경험해보세요!</h2>
    </SignupHeader>  
        이메일:
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        닉네임:
        <Input
          type="nickname"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
        />
        비밀번호:
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      <br /> 
      <Button type="submit">Sign Up</Button>
      <HrefRight><a href = "Login"> 이미 회원이신가요? 로그인하기 </a></HrefRight>
    </Form>
    </SignupContainer>
  );
}

//This code is just an example, please bear in mind that this form doesn't cover all aspects of form validation and security which are crucial for a production ready app.


export default Signup;