import React from "react";
import styled from "styled-components";
import logo from "../Asset/2.png";

function Footer() {
  return (
    <>
      <Footerdiv>
        <Repositoryalldiv>
          <Repositorydiv>
            <span>AMOONA</span>
            <ul>
              <li>Repository</li>
              <li>Demovideo</li>
            </ul>
          </Repositorydiv>
          <Authorshipdiv>
            <span>
              <a href="https://github.com/samsamgo">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>장경욱</div>
              <section>Front-End</section>
            </span>
            <span>
              <a href="https://github.com/SEB-FE-41-kimsangwan">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>김상완</div>
              <section>Front-End</section>
            </span>
            <span>
              <a href="https://github.com/Parkpyunghwan">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>박평환</div>
              <section>Front-End</section>
            </span>
            <span>
              <a href="https://github.com/leg1771">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>이정권</div>
              <section>Front-End</section>
            </span>
            <span>
              <a href="https://github.com/maverickhg">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>강현구</div>
              <section>Back-End</section>
            </span>
            <span>
              <a href="https://github.com/euijin0122">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>김의진</div>
              <section>Back-End</section>
            </span>
            <span>
              <a href="https://github.com/YJCMS">
                <i class="fa-brands fa-github fa-3x"></i>
              </a>
              <div>이승현</div>
              <section>Back-End</section>
            </span>
          </Authorshipdiv>
        </Repositoryalldiv>
        <Impormationdiv></Impormationdiv>
      </Footerdiv>
    </>
  );
}

export default Footer;

const Footerdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 0 47px;
  div1 {
    text-align: center;
  }
`;

const Impormationdiv = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgbLIG45tCphAyPKfMDgK0GmGEO07tBizAg&usqp=CAU");
  background-size: auto;
  height: 220px;
  img {
    /* margin: 0px 0px 20px 30px; */
    width: auto;
    height: 80px;
    margin: 30px 0px 20px 30px;
  }

  div {
    line-height: 1.8;
    margin: 30px 70px 60px 100px;
  }
`;

const Repositoryalldiv = styled.div`
  height: 200px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kPm6foOV5n0dS2p45aUjfiX35m9b_thWJA&usqp=CAU");
  background-size: cover;
  display: flex;
  flex-direction: row;
  padding-top: 40px;
`;
const Repositorydiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  color: black;

  ul {
    margin: 30px 0px 0px 60px;
    font-size: 30px;
    color: Pink;
  }
  span {
    font-weight: bold;
    font-size: 40px;
    color: Pink;
    margin: 40px 20px 20px 50px;
  }
`;

const Authorshipdiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  color: black;
  div1 {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 7%;
    left: 10%;
    transform: translateY(1600px);
    ul {
      font-size: 30px;
      color: Pink;
    }
    img {
      /* margin: 0px 0px 20px 30px; */
      width: 80px;
      height: 80px;
      margin: 30px 0px 20px 30px;
    }
  }

  span {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-weight: bold;

    div {
      margin: 10px 0px 10px 0px;
      font-size: 15px;
    }
    section {
      border-radius: 20px;
      width: 100px;
      border: 5px solid pink;
      font-size: 15px;
    }
    a {
      color: Pink;
    }
  }
`;
