import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Leftdiv = styled.div`
  flex: 1;
`;
const Logodiv = styled.div`
  margin-left: 20px;
  font-size: x-large;
`;
const Rightdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 20px;
`;
const Rightfontsdiv = styled.div`
    font-size: 18px;
    &:hover{
        color: #5a5555;
        cursor: pointer;
    }
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <Leftdiv><Logodiv>LOGO</Logodiv></Leftdiv>
      <Rightdiv>
        <Rightfontsdiv>
          <Link to="/">
            Home
          </Link>
        </Rightfontsdiv>
       
        <Rightfontsdiv>
          <Link to="/createPost">
            Create Post
          </Link>
        </Rightfontsdiv>
        <Rightfontsdiv>
          <Link to="/login">
            Login
          </Link>
        </Rightfontsdiv>
        <Rightfontsdiv>
           <Link to="/login">
            Logout
           </Link>
        </Rightfontsdiv>
      </Rightdiv>
    </TopbarContainer>
  );
};

export default Topbar;
