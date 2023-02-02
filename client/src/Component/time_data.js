import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Timediv = styled.div`
  width: 700px;
  height: 200px;
  display: flex;
  flex-direction: row;
  background-color: white;
  color: black;
  align-items: center;
  vertical-align: middle;
`;
const Yeardiv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0px 5px 0px 5px;
  button {
    width: 100%;
    height: 30px;
    border: none;
    background: linear-gradient(
      to top,
      rgba(20, 57, 75, 1),
      rgba(20, 57, 75, 0.8),
      rgba(20, 57, 75, 0.5)
    );
  }
  button:hover {
    background-color: rgba(20, 57, 75, 1);
  }
  div1 {
    margin-bottom: 5px;
    font-size: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px 20px 0px;
  }
`;
const Datediv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0px 5px 0px 5px;
  button {
    width: 100%;
    height: 30px;
    border: none;
    background: linear-gradient(
      to top,
      rgba(44, 57, 75, 1),
      rgba(44, 57, 75, 0.8),
      rgba(44, 57, 75, 0.5)
    );
  }
  button:hover {
    background-color: rgba(44, 57, 75, 1);
  }
  div1 {
    margin-bottom: 5px;
    font-size: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0px 20px 0px;
  }
`;
const AMPM = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  padding-top: 20px;
  span {
    margin: 20px 0px 20px 0px;
    font-size: 30px;
  }
  &:hover {
    font-weight: bold;
    color: var(--black-900);
  }
  &.active {
    align-items: center;
    font-weight: bold;
    background: var(--black-050);
    color: var(--black-900);
    border-right: 3px solid var(--theme-primary-color);
  }
`;

function TimeData() {
  const todaynow = new Date();
  const [getyear, setgetyear] = useState("");
  const [getmonth, setgetmonth] = useState("");
  const [getday, setgetday] = useState("");
  const [gethour, setgethour] = useState("");
  const [getmin, setgetmin] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setgetyear(todaynow.getFullYear());
      setgetmonth(todaynow.getMonth());
      setgetday(todaynow.getDate());
      setgethour(todaynow.getHours());
      setgetmin(todaynow.getMinutes());
      setActive(todaynow.getHours());
    }, 1000);
  }, []);

  function mius(event) {
    const buttonName = event.target.value;
    if (buttonName === "year") {
      setgetyear(getyear - 1);
    } else if (buttonName === "mon") {
      setgetmonth(getmonth < 1 ? 12 : getmonth - 1);
    } else if (buttonName === "day") {
      setgetday(getday < 1 ? 31 : getday - 1);
    } else if (buttonName === "hour") {
      setgethour(gethour < 1 ? 12 : gethour - 1);
    } else if (buttonName === "min") {
      setgetmin(getmin < 1 ? 59 : getmin - 1);
    }
  }

  function plus(event) {
    const buttonName = event.target.value;
    if (buttonName === "year") {
      setgetyear(getyear + 1);
    } else if (buttonName === "mon") {
      setgetmonth(getmonth > 11 ? 1 : getmonth + 1);
    } else if (buttonName === "day") {
      setgetday(getday > 30 ? 1 : getday + 1);
    } else if (buttonName === "hour") {
      setgethour(gethour > 11 ? 1 : gethour + 1);
    } else if (buttonName === "min") {
      setgetmin(getmin > 58 ? 1 : getmin + 1);
    }
  }

  return (
    <Timediv>
      <Yeardiv>
        <div1>year</div1>
        <button value="year" onClick={plus}>
          <i class="fa-sharp fa-solid fa-chevron-up"></i>
        </button>
        <span>{getyear}</span>
        <button value="year" onClick={mius}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </Yeardiv>
      <Datediv>
        <div1>월</div1>
        <button value="mon" onClick={plus}>
          <i class="fa-sharp fa-solid fa-chevron-up"></i>
        </button>
        <span>{getmonth}</span>
        <button value="mon" onClick={mius}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </Datediv>
      <Datediv>
        <div1>일</div1>
        <button value="day" onClick={plus}>
          <i class="fa-sharp fa-solid fa-chevron-up"></i>
        </button>
        <span>{getday}</span>
        <button value="day" onClick={mius}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </Datediv>
      <Datediv>
        <div1>시</div1>
        <button value="hour" onClick={plus}>
          <i class="fa-sharp fa-solid fa-chevron-up"></i>
        </button>
        <span>{gethour}</span>
        <button value="hour" onClick={mius}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </Datediv>
      <Datediv>
        <div1>분</div1>
        <button value="min" onClick={plus}>
          <i class="fa-sharp fa-solid fa-chevron-up"></i>
        </button>
        <span>{getmin}</span>
        <button value="min" onClick={mius}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </button>
      </Datediv>
      <AMPM
        className={"AM" === active ? "active" : ""}
        onClick={() => setActive("AM")}
      >
        <span>AM</span>
      </AMPM>
      <AMPM
        className={"PM" === active ? "active" : ""}
        onClick={() => setActive("PM")}
      >
        <span>PM</span>
      </AMPM>
    </Timediv>
  );
}

export default TimeData;
