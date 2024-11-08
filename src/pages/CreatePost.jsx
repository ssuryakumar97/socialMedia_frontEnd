import React from 'react'
import styled from "styled-components";
import Topbar from "../components/topbar";
import CreatePostComp from '../components/CreatePostComp';

const MiddleContainer = styled.div`
  width: 100%;
  height: calc(100vh - 59px);
  display: flex;
`;
const MiddleLeftContainer = styled.div`
  height: 100%;
  width: calc((100%) / 4);
  border-right: 1px gray solid;
`;
const MiddleMidContainer = styled.div`
  height: 100%;
  width: calc((100%) / 2);
`;
const MiddleRightContainer = styled.div`
  height: 100%;
  width: calc((100%) / 4);
  border-left: 1px gray solid;
`;

const CreatePost = () => {
    
  return (
    <div>
    <Topbar />
    <MiddleContainer>
      <MiddleLeftContainer />
      <MiddleMidContainer>
        <CreatePostComp/>
      </MiddleMidContainer>
      <MiddleRightContainer />
    </MiddleContainer>
  </div>
  )
}

export default CreatePost
