import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Asset/2.png";
import Menu from "./Menu";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Headerdiv = styled.div`
  position: relatve;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  div2 {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    img {
      width: auto;
      height: 30px;
    }
    span {
      font-weight: bold;
      margin-right: auto;
    }
  }
  .LoginChange {
   margin-left : 1250px;
  }
  .Menu{
   
  }
`;

const auth = window.localStorage.getItem("Authorization");

function Header() {
  const location = useLocation();
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);


  const LoginChange = () => {
    if (pathname === "/") {
      return <LoginButton />;
    } 

   
    else {}
  };

 
  const SignupChange = () => {
    if (pathname === "/") {
      
      
      return <SignupButton />;

    } 
    
    else {
    }
  };

  return (
    <>
      <Headerdiv>
        <div2>
          <Link to="/">
            <img src={logo} alt="logo_img" />
          </Link>
          <span>AMOONA</span>
        </div2>
         
        <span className="LoginChange">{LoginChange()}</span>
        <span className="SignupChange">{SignupChange()}</span>
        
        
      </Headerdiv>
    </>
  );
}

export default Header;
