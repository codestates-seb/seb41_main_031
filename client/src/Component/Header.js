import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Asset/2.png";
import Menu from "./Menu";


const Headerdiv = styled.div`
  position: relative;
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
  i {
    z-index: 4;
    position: relative;
    margin-left: 20px;
  }
`;

function Header() {
  return (
    <>
      <Headerdiv>
        <div2>
          <Link to="/">
            <img src={logo} alt="logo_img" />
          </Link>
          <span>AMOONA</span>
        </div2>

        <i>
          <Menu/>
          
        </i>
      </Headerdiv>
    </>
  );
}

export default Header;
