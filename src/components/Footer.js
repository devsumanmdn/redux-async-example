import React from 'react';
import styled from 'styled-components';

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

const Footer = () => <FooterDiv>Footer</FooterDiv>;

export default Footer;
