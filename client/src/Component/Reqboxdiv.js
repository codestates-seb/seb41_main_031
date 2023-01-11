import React from "react";
import styled from "styled-components";

const Reqbox = styled.div`
  background-color: white;
  color: black;
  box-shadow: 5px 5px 5px 5px gray;
  display: flex;
  margin: 60px 0px 0px 60px;
  flex-direction: column;
  width: 400px;
  height: 380px;
  border-radius: 20px;
  font-size: 8px;
  text-align: center;
  align-items: center;
  impormationdiv {
    color: white;
    box-shadow: 5px 5px 5px 5px gray;
    display: flex;
    flex-direction: row;
    background-color: #ff4c29;
    width: 400px;
    height: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    divuser {
      display: flex;
      flex-direction: row;
      img {
        width: auto;
        height: 40px;
        border-radius: 100px;
        margin: 5px 0px 0px 10px;
      }
      div {
        margin: 15px 0px 0px 10px;
        font-size: 12px;
      }
    }
    divdate {
      margin: 10px 0px 0px 50px;
      width: 130px;
    }
    divparty {
      margin: 17px 0px 0px 30px;
    }
  }
  h1 {
    font-size: 25px;
    margin-top: 50px;
  }
  contentdiv {
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
  }
  button {
    font-size: 20px;
    width: 170px;
    height: 50px;
    background-color: #ff4c29;
    border-radius: 50px;
    color: white;
    border: none;
    margin-top: 30px;
  }
  locationdiv {
    font-size: 15px;
    margin-top: 30px;
  }
`;

function Reqboxdiv({
  img,
  name,
  Date,
  Time,
  Time_after,
  Party,
  item,
  Location,
}) {
  return (
    <>
      <Reqbox>
        <impormationdiv>
          <divuser>
            <img src={img} alt="user"></img>
            <div>{name}</div>
          </divuser>
          <divdate>
            DATE | {Date} <br />
            TIME | {Time} - {Time_after}
          </divdate>
          <divparty>PARTY | {Party}</divparty>
        </impormationdiv>
        <h1>{item} 할 사람 구해요~~ 🏀</h1>
        <contentdiv>👇PLS PRESS JOIN👇</contentdiv>
        <button>JOIN</button>
        <locationdiv>-{Location}-</locationdiv>
      </Reqbox>
    </>
  );
}

export default Reqboxdiv;
