/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 200vh;
padding: 20px;
background-color: #f0f0f0;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10%;
  padding: 10px 0;
  background-color: #f9e000;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const FooterWrapper = styled.div`

 height:80%;
 margin-left: 20px;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;

`;
export const FooterText = styled.text`
color: black;
font-size: 20px;
font-weight: 700;
`;
export const FooterText2 = styled.text`
color: black;
font-size: 15px;
margin-top: 10px;
`;
