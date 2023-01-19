import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css, keyframes } from "styled-components";

function NavigationBar() {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState([]);

  const handleClick = (nodeId) => {
    setExpanded((prevExpanded) => {
      if (prevExpanded.includes(nodeId)) {
        return prevExpanded.filter((id) => id !== nodeId);
      } else {
        return [...prevExpanded, nodeId];
      }
    });
  };

  const ZoomClick = (nodeId) => {
    dispatch({ type: "SET_NUMBER", maplevel: nodeId });
  };

  return (
    <Setlocdiv>
      <div>NOW METTIONG....</div>
      <Setlocsection onClick={() => handleClick("내 주변(500m)")}>
        <div>
          <span>
            내 주변
            {expanded.includes("내 주변(500m)") ? (
              <RotatedIcon
                className="fa-sharp fa-solid fa-caret-down fa-2x"
                rotateZ={180}
                paddingBottom="10px"
              ></RotatedIcon>
            ) : (
              <RotatedIcon
                className="fa-sharp fa-solid fa-caret-down fa-2x"
                rotateZ={0}
              ></RotatedIcon>
            )}
          </span>
        </div>
      </Setlocsection>
      {expanded.includes("내 주변(500m)") && (
        <ul>
          <NavBar expanded1>
            <div1 onClick={() => ZoomClick(1)}>내 주변</div1>
            <div1 onClick={() => ZoomClick(3)}>50m</div1>
            <div1 onClick={() => ZoomClick(4)}>100m</div1>
            <div1 onClick={() => ZoomClick(5)}>250m</div1>
            <div1 onClick={() => ZoomClick(6)}>500m</div1>
            <div1 onClick={() => ZoomClick(7)}>1Km</div1>
          </NavBar>
        </ul>
      )}
    </Setlocdiv>
  );
}

export default NavigationBar;

const Setlocdiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: aqua;
  div {
    font-size: 32px;
    font-weight: bold;
    margin: 25px 0px 25px 50px;
    z-index: "2";
  }
  Setlocsection {
  }
`;

const Setlocsection = styled.section`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    span {
      margin: 0px 0px 0px 0px;
      font-size: 20px;
      text-decoration: underline;
      text-decoration-thickness: 5px;
    }
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(-10%);
  }
`;
const NavBar = styled.nav`
  overflow: hidden;
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  margin: 0px 30px 0px 50px;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.expanded1 &&
    css`
      animation: ${slideDown} 0.5s ease-in-out;
      transform: translateY(-10%);
    `}

  div1 {
    padding-left: 10px;
    width: 120px;
    font-size: 20px;
    line-height: 30px;
    &:hover {
      background-color: #3e8e41;
    }
  }
`;

const RotatedIcon = styled.i`
  transform: rotateZ(${(props) => props.rotateZ || 0}deg);
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  margin: 0px 0px 0px 20px;
`;
