import { BrowserRouter, Routes, Route } from "react-router-dom";
// import exo from "../src/Asset/fonts/exo.css";
import MainPage from "./Pages/MainPage";
import Mypage from "./Pages/Mypage";

import DummyData from "./Asset/DummyData";
import PostDetail from "./Component/PostDetail";
import Login from "./Pages/Login";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { createGlobalStyle } from "styled-components";

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
          <Route path="/mypage/" element={<Mypage />}></Route>
          <Route path="/post-detail/" element={<PostDetail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
