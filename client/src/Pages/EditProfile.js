import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { Link, useLoaderData, useNavigate, Navigate } from "react-router-dom";

const Main = styled.div`
  width: 100%;
`;
const LeftBox = styled.div``;
const Image = styled.div`
  width: 17rem;
  height: 17rem;
  border-radius: 70%;
  overflow: hidden;
  background-color: green;
  margin-right: 80px;
  margin-bottom: 60px;
`;
const RightBox = styled.div`
  float: right;
  margin-top: 90px;
`;
const Nickname = styled.input.attrs({
  type: "text",

  required: true,
  placeholder: "변경할 닉네임",
})`
  box-sizing: border-box;
  width: 450px;
  height: 55px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const Email = styled.input.attrs({
  type: "text",
  required: true,
  placeholder: "변경할 이메일",
})`
  box-sizing: border-box;
  width: 450px;
  height: 55px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const Region = styled.input.attrs({
  type: "text",
  required: true,
  placeholder: "변경할 지역",
})`
  box-sizing: border-box;
  width: 450px;
  height: 55px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const PreviousPassword = styled.input.attrs({
  type: "password",
  required: true,
  placeholder: "이전 비밀번호를 입력해주세요",
})`
  box-sizing: border-box;
  width: 585px;
  height: 55px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;
const NewPassword = styled.input.attrs({
  type: "password",
  required: true,
  placeholder: "새로운 비밀번호를 입력해주세요",
})`
  box-sizing: border-box;
  width: 585px;
  height: 55px;

  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;
const MiddleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
`;
const BottomBox = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
const EditButton = styled.button`
  width: 600px;
  height: 45.55px;

  background-image: linear-gradient(
    to bottom,
    #2c394b,
    #2f515d,
    #3f6867,
    #5e7e6c,
    #879173
  );
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f9fbff;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  margin-bottom: 30px;

  &:hover {
    transition: all 1.1s;
    background-color: rgb(0, 0, 0, 0.6);
    color: rgb(255, 255, 255, 100);
  }
`;
const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  width: 600px;
  height: 45.55px;

  background: #ff4c29;
  border-radius: 15px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #f9fbff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 1.1s;
    background-color: rgb(196, 60, 33);
  }
`;

const PreviousPasswordBox = styled.div`
  margin-top: 80px;
  font-size: 0.7rem;
`;
const NewPasswordBox = styled.div`
  margin-top: 20px;
  font-size: 0.7rem;
`;

const InformBox = styled.div`
  margin-right: 350px;
  margin-left: 60px;
`;

const NicknameBox = styled.div`
  display: flex;
  justify-content: center;
  .Nickname {
    width: 80px;
    font-size: 1.1rem;
    margin-top: 13.5px;
  }
`;
const EmailBox = styled.div`
  display: flex;
  justify-content: center;
  .Email {
    width: 80px;
    font-size: 1.1rem;
    margin-top: 13.5px;
  }

  .emailalert {
    color: red;
  }
`;
const RegionBox = styled.div`
  display: flex;
  justify-content: center;
  .Region {
    width: 80px;
    font-size: 1.1rem;
    margin-top: 13.5px;
  }
`;

function EditProfile() {
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    region: "",
    previouspassword: "",
    newpassword: "",
  });

  const [isValid, setIsValid] = useState({
    isEmail: false,
    isPassword: false,
    isClicked: false,
  });

  //이메일 정규식

  const Print = () => {
    console.log("이메일 " + form.email);
    console.log(isValid.isEmail);
    console.log("비밀번호 " + form.newpassword);
    console.log(isValid.isPassword);
  };

  const onChangeprofile = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(form.email)) {
      setIsValid({ ...isValid, isEmail: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isEmail: true });
    }
  }, [form.email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(form.newpassword)) {
      setIsValid({ ...isValid, isPassword: false });
      setIsValid({ ...isValid, isClicked: false }); // 정규식에 안맞으면 클릭상태 초기화
    } else {
      setIsValid({ ...isValid, isPassword: true });
    }
  }, [form.newpassword]);

  function Clicked() {
    setIsValid({ ...isValid, isClicked: true });
  }

  const navigate = useNavigate();

  const Edituser = (e) => {
    if (
      form.nickname !== "" &&
      isValid.isEmail &&
      form.region !== "" &&
      isValid.isPassword
    ) {
      if (window.confirm("이메일과 비밀번호를 변경하시겠습니까?")) {
        setTimeout(function () {
          axios
            .post("http://localhost:5500/data/1")
            .then(() => {
              window.location.reload();
              alert("이메일과 비밀번호가 변경되었습니다");
              navigate("/");
            })
            .catch((err) => alert(err.response.data.message));
        }, 3000);
      }
    } else if (isValid.isPassword) {
      if (window.confirm("비밀번호를 변경하시겠습니까?")) {
        setTimeout(function () {
          axios
            .post("http://localhost:5500/data/1")
            .then(() => {
              window.location.reload();
              alert("비밀번호가 변경되었습니다.");
              navigate("/");
            })
            .catch((err) => alert(err.response.data.message));
        }, 3000);
      }
    } else if (isValid.isEmail) {
      if (window.confirm("이메일을 변경하시겠습니까?")) {
        setTimeout(function () {
          axios
            .post("http://localhost:5500/data/1")
            .then(() => {
              window.location.reload();
              alert("이메일이 변경되었습니다.");
              navigate("/");
            })
            .catch((err) => alert(err.response.data.message));
        }, 3000);
      }
    }
  };

  return (
    <Main>
      <Skeleton width={"100%"} />
      <Skeleton width={"100px"} />
      <MiddleBox>
        <LeftBox>
          <Image></Image>
        </LeftBox>
        <RightBox>
          <InformBox>
            <NicknameBox>
              <span className="Nickname">닉네임: </span>
              <Nickname></Nickname>
            </NicknameBox>
            <EmailBox>
              <span className="Email">이메일: </span>
              <Email
                name="email"
                value={form.email}
                onChange={onChangeprofile}
              ></Email>
              <span>
                {/* //함수로 정리하기 */}
                <span className="emailalert">
                  {form.email === ""
                    ? null
                    : isValid.isClicked === false
                    ? null
                    : isValid.isEmail === true
                    ? null
                    : "이메일 형식에 맞지 않습니다."}
                </span>
              </span>
            </EmailBox>
            <RegionBox>
              <span className="Region">지역: </span>
              <Region
                name="region"
                value={form.region}
                onChange={onChangeprofile}
              />
            </RegionBox>
          </InformBox>
          <PreviousPasswordBox>
            <span className="Previous">이전 비밀번호</span>
            <PreviousPassword
              name="previouspassword"
              value={form.previouspassword}
              onChange={onChangeprofile}
            />
          </PreviousPasswordBox>
          <NewPasswordBox>
            <span className="New">새로운 비밀번호</span>
            <NewPassword
              name="newpassword"
              value={form.newpassword}
              onChange={onChangeprofile}
            />
          </NewPasswordBox>
          <span className="passwordalert">
            {form.newpassword === ""
              ? null
              : isValid.isClicked === false
              ? null
              : isValid.isPassword === true
              ? null
              : "비밀번호 형식에 맞지 않습니다."}
          </span>
        </RightBox>
      </MiddleBox>
      <BottomBox>
        <EditButton
          onClick={() => {
            Edituser();
            Print();
            Clicked();
          }}
        >
          프로필 변경하기
        </EditButton>
        <Link to="/mypage">
          <BackButton>뒤로가기</BackButton>
        </Link>
      </BottomBox>
    </Main>
  );
}

export default EditProfile;
