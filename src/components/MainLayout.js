import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const MainContainer = styled.div`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: top;
  justify-content: center;
  box-sizing: border-box;
`;

const MainLayout = ({ children }) => (
  <div>
    <Nav />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </div>
);

export default MainLayout;
