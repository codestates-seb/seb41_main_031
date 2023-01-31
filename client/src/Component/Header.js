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
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  flex-direction: row;
  align-items: center;
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
  logindiv {
    display: flex;
    flex-direction: row;
    i {
      margin: 3px 3px 0px 40px;
      color: black;
    }
  }
  .LoginChange {
    margin-left: 1250px;
  }
  .Menu {
  }
`;

const auth = window.localStorage.getItem("Authorization");

function Header() {
  const location = useLocation();
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  function Logout() {
    window.localStorage.removeItem("Authorization");
    window.location.replace("/");
  }

  return (
    <>
      <Headerdiv>
        <div2>
          <Link to="/">
            <img src={logo} alt="logo_img" />
          </Link>
          <span>AMOONA</span>
        </div2>

        <logindiv>
          {auth && JSON.parse(auth).jwtToken ? (
            <>
              <Link to="/mypage/">
                <i class="fa-solid fa-user"></i>
              </Link>
              <i
                className="fa-solid fa-right-from-bracket"
                onClick={Logout}
              ></i>
            </>
          ) : (
            <>
              <Link to="/Login/">
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
              Login
            </>
          )}
        </logindiv>
      </Headerdiv>
    </>
  );
}

export default Header;
