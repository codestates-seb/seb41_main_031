import React from "react";
import styled from "styled-components";
import logo from "../Asset/3.png";

const Footerdiv = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  flex-direction: column;
  color: white;
  padding: 30px 30px 20px 30px;
  div1 {
    text-align: center;
  }
`;

const Impormationdiv = styled.div`
  display: flex;
  flex-direction: row;
  img {
    /* margin: 0px 0px 20px 30px; */
    width: auto;
    height: 70px;
    margin: 30px 0px 20px 30px;
  }
  div {
    line-height: 1.8;
    margin: 30px 70px 60px 100px;
  }
`;

const Authorshipdiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0px 60px 0px;
  span {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-weight: bold;
    div {
      margin: 10px 0px 10px 0px;
      width: 100px;
    }
    section {
      border-radius: 20px;
      width: 140px;
      border: 5px solid white;
    }
    a {
      color: white;
    }
  }
`;

function Footer() {
  return (
    <>
      <Footerdiv>
        <Impormationdiv>
          <img src={logo} alt="logo_img" />
          <div>
            WEEBLY THEMES
            <br />
            PRE.SALE FAQS
            <br />
            SUBMIT A THICKET
          </div>
          <div>
            WEEBLY THEMES
            <br />
            PRE.SALE FAQS
            <br />
            SUBMIT A THICKET
          </div>
          <div>
            WEEBLY THEMES
            <br />
            PRE.SALE FAQS
            <br />
            SUBMIT A THICKET
          </div>
          <div>
            WEEBLY THEMES
            <br />
            PRE.SALE FAQS
            <br />
            SUBMIT A THICKET
          </div>
        </Impormationdiv>
        <hr></hr>
        <Authorshipdiv>
          <span>
            <a href="https://github.com/samsamgo">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>장경욱</div>
            <section>Front-End</section>
          </span>
          <span>
            <a href="https://github.com/SEB-FE-41-kimsangwan">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>김상완</div>
            <section>Front-End</section>
          </span>
          <span>
            <a href="https://github.com/Parkpyunghwan">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>박평환</div>
            <section>Front-End</section>
          </span>
          <span>
            <a href="https://github.com/leg1771">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>이정권</div>
            <section>Front-End</section>
          </span>
          <span>
            <a href="https://github.com/maverickhg">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>강현구</div>
            <section>Back-End</section>
          </span>
          <span>
            <a href="https://github.com/euijin0122">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>김의진</div>
            <section>Back-End</section>
          </span>
          <span>
            <a href="https://github.com/YJCMS">
              <i class="fa-brands fa-github fa-5x"></i>
            </a>
            <div>이승현</div>
            <section>Back-End</section>
          </span>
        </Authorshipdiv>
        <div1>@Copyright All rights reserved</div1>
      </Footerdiv>
    </>
  );
}

export default Footer;
