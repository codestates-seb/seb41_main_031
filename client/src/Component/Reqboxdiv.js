import React from "react";
import styled from "styled-components";
import logo from "../Asset/yadon.png";
import { useDispatch, useSelector } from "react-redux";

function Reqboxdiv({
  name,
  Date,
  Time,
  Time_after,
  Party,
  item,
  Location,
  openModal,
  value,
}) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  function openpostdeModal() {
    dispatch({ type: "SET_POST", postid: value });
    console.log(data.postid);
    openModal();
  }

  return (
    <>
      <Reqbox>
        <impormationdiv>
          <divuser>
            <img src={logo} alt="user"></img>

            <div>{name}</div>
          </divuser>
          <divdate>
            DATE | {Date} <br />
            TIME | {Time}
          </divdate>
          <divparty>PARTY 1 | {Party}</divparty>
        </impormationdiv>
        <h1>{item} 할 사람 구해요~~ </h1>
        <contentdiv>👇PLS PRESS JOIN👇</contentdiv>
        <button onClick={() => openpostdeModal()}>JOIN</button>
        <locationdiv>-{Location}-</locationdiv>
      </Reqbox>
    </>
  );
}

export default Reqboxdiv;

const Reqbox = styled.div`
  color: black;
  box-shadow: 5px 5px 5px 5px gray;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 380px;
  border-radius: 20px;
  font-size: 8px;
  text-align: center;
  align-items: center;
  margin: 20px 20px 20px 20px;
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
