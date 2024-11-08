import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import styled from "styled-components";
import PostComponent from "../components/postComponent";
import { publicRequest } from "../../requestMethods";

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

const Home = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    const getPost = async() => {
      const response = await publicRequest.get("/post/getAllPost")
      setPost(response.data.data)
      console.log(response.data.data)
    }
    getPost()
  },[])

  return (
    <div>
      <Topbar />
      <MiddleContainer>
        <MiddleLeftContainer />
        <MiddleMidContainer>
          {post.map((item, ind) => (
          <PostComponent data={item} key={ind} />
          )
          )}
        </MiddleMidContainer>
        <MiddleRightContainer />
      </MiddleContainer>
    </div>
  );
};

export default Home;
