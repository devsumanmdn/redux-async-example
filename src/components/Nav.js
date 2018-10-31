import React from "react";
import styled, { css } from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: -3px 0px 4px 0px #0005;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #444444;
  font-size: 18px;
  margin: 0 10px;
  cursor: pointer;

  ${props =>
    props.brand &&
    css`
      font-size: 24px;
    `};
`;

const Nav = props => {
  return (
    <Header>
      <div>
        <StyledLink brand href={"/"}>
          Todo Example
        </StyledLink>
      </div>
      <div />
    </Header>
  );
};

export default Nav;
