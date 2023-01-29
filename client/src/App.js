import { BrowserRouter, Routes, Route } from "react-router-dom";
// import exo from "../src/Asset/fonts/exo.css";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";
import Postup from "./Pages/Postup";
import PostDetail from "./Component/PostDetail";
import Timedata from "./Component/time_data";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import EditProfile from "./Pages/EditProfile";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    /* font-family: 'exo'; */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/signup/" element={<Signup />}></Route>
          <Route path="/mypage/" element={<Mypage />}></Route>
          <Route path="/mypage/editprofile" element={<EditProfile />}></Route>
          <Route path="/post-detail/" element={<PostDetail />}></Route>
          <Route path="/post-up/" element={<Postup />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/mypage/editprofile" element={<EditProfile />}></Route>
          <Route path="/post-detail" element={<PostDetail />}></Route>
          <Route path="/Timedata" element={<Timedata />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
