import React from "react";
import styled from "styled-components";
import logo from "../Asset/2.png";
import Menu from "./Menu"

const Headerdiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  img {
    margin: 0px 0px 20px 30px;
  }
  span {
    font-weight: bold;
    margin: 25px 55% 0px 0px;
  }
  i {
    position: relative;
    left: 20%;
    margin: 25px 20px 0px 20px;
  }
`;

function Header() {
  return (
    <>
      <Headerdiv>
        <img src={logo} alt="logo_img" />
        <span>AMOONA</span>
        {/* <i class="fa-regular fa-bell fa-2x"></i>
        <i class="fa-solid fa-bars fa-2x"></i> */}
        <i class="fa-regular fa-bell fa-2x"><Menu /></i>
      </Headerdiv>
    </>
  );
}

export default Header;
