import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #fff;
  margin: 0 5px;
  text-decoration: none;
  box-sizing: border-box;
  &::after {
    display: block;
    content: "";
    height: 4px;
    margin-bottom: -4px;
    margin-top: 0px;
    background-color: #33a6;
    width: 100%;
    transition-duration: 0.2s;
  }
  &:hover {
    &::after {
      margin-top: calc(-1.3em + 4px);
      height: 1.3em;
    }
  }
`;

const FooterDiv = styled.div`
  position: static;
  bottom: 0;
  height: 40px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  color: #fff;
  background-color: #2ab;
  width: 100%;
`;

const Footer = () => (
  <FooterDiv>
    Made by{" "}
    <Link
      href={"https://github.com/devsumanmdn"}
      title={"Github(@devsumanmdn)"}
      target={"_blank"}
    >
      @devsumanmdn
    </Link>
  </FooterDiv>
);

export default Footer;
