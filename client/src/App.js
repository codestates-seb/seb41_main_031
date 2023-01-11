import { BrowserRouter, Routes, Route } from "react-router-dom";
// import exo from "../src/Asset/fonts/exo.css";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login" 
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Mypage from "./Component/Mypage";
import EditProfile from "./Pages/EditProfile";
import PostDetail from "./Component/PostDetail"; 
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
          <Route path="Login" element={<Login />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route path="/mypage/editprofile" element={<EditProfile />}></Route>
          <Route path="/postdetail" element={<PostDetail />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
