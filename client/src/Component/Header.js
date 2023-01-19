import React from "react";
import styled from "styled-components";
import logo from "../Asset/2.png";

function Header() {
  return (
    <>
      <Headerdiv>
        <img src={logo} alt="logo_img" />
        <span>AMOONA</span>
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-bars"></i>
      </Headerdiv>
    </>
  );
}

export default Header;

const Headerdiv = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0 40px;
  img {
    width: auto;
    height: 30px;
    margin-right: 20px;
  }
  span {
    font-weight: bold;
    margin-right: auto;
  }

  i {
    margin-left: 20px;
  }
`;
