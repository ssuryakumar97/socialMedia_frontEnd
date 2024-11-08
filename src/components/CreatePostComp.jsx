import React, { useContext, useState } from "react";
import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DisplayComments from "./DisplayComments";
import { MyContext } from "../MyContext";
import { publicRequest } from "../../requestMethods";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Postdiv = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 10px;
  min-height: 100px;
  border: 1px solid gray;
  border-radius: 10px;
`;
const Postdivtop = styled.div`
  display: flex;
  gap: 10px;
`;
const Postdivtopleft = styled.div`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aliceblue;
  background-color: gray;
`;
const Postdivtopright = styled.div`
  font-size: 18px;
`;
const Postdivmiddle = styled.textarea`
  margin: 5px auto;
  padding: 5px;
`;
const Postdivbottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)``;
const Postdivbottomleft = styled.div`
  display: flex;
`;
const PostdivbottomleftLL = styled.div``;
const PostdivbottomleftLR = styled.div``;
const Postdivbottomright = styled.div``;
const CommentInput = styled.input`
  width: 70%;
  margin: 5px;
`;
const CommentAddButton = styled.button`
  background-color: #5252b0;
  color: white;
`;

const CommDiv = styled.div`
`

const CreatePostComp = () => {
    const {user , setUser} = useContext(MyContext)
    const [content, setContent] = useState("")
    console.log(content)
    const userData = JSON.parse(localStorage.getItem("data"))
    console.log(userData)

    const handleSubmit = async(e) => {
        e.preventDefault()
        const comment = await publicRequest.post("/post/newPost", {postContent: content, userId: userData.id})
        console.log(comment.data)
        setContent("")
    }
  return (
    <Postdiv>
      <Postdivtop>
        <Postdivtopleft>
          <PersonOutlineIcon />
        </Postdivtopleft>
        <Postdivtopright>{userData.name}</Postdivtopright>
      </Postdivtop>
      <Postdivmiddle name="postContent" cols="30" rows="10"placeholder="Enter your text here" onChange={(e) => setContent(e.target.value)} value={content} />
      <Postdivbottom>
        <Postdivbottomleft>
          <button onClick={handleSubmit}>update</button>
        </Postdivbottomleft>
      </Postdivbottom>
    </Postdiv>
  );
};

export default CreatePostComp;
