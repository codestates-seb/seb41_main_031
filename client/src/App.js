import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login" 
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
