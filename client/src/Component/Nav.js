import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css, keyframes } from "styled-components";

function NavigationBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
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

  function displayString(data) {
    if (data === 1) return "내 주변";
    if (data === 3) return "50M";
    if (data === 4) return "100M";
    if (data === 5) return "250M";
    if (data === 6) return "500M";
    if (data === 7) return "1KM";
  }

  const ZoomClick = (nodeId) => {
    dispatch({ type: "SET_NUMBER", maplevel: nodeId });
  };

  return (
    <Setlocdiv>
      <div>NOW MEETING....</div>
      <Setlocsection onClick={() => handleClick("내 주변(500m)")}>
        <div>
          <span>
            {displayString(data.maplevel)}
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
      </Setlocsection>
    </Setlocdiv>
  );
}

export default NavigationBar;

const Setlocdiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  padding: 100px 100px 0px 40px;
  justify-content: space-between;
  div {
    font-size: 32px;
    font-weight: bold;
    margin: 25px 0px 25px 50px;
  }
`;

const Setlocsection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  div {
    display: flex;
    flex-direction: row;
    span {
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
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.expanded1 &&
    css`
      animation: ${slideDown} 0.5s ease-in-out;
      transform: translateY(-10%);
    `}

  div1 {
    width: 120px;
    font-size: 20px;
    line-height: 30px;
    &:hover {
      background-color: rgba(44, 57, 75, 0.4);
    }
  }
`;

const RotatedIcon = styled.i`
  transform: rotateZ(${(props) => props.rotateZ || 0}deg);
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  margin: 0px 0px 0px 20px;
`;
