import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DisplayComments from "./DisplayComments";
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
const Postdivmiddle = styled.div`
  width: 90%;
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

const PostComponent = ({data}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userData, setUserData] = useState()
  
  console.log(userData)
  useEffect(() => {
    const getUser = async() => {
      const res = await publicRequest.post("/user/getUser", {userId: data.userId})
      console.log(res)
      setUserData(res.data)
    }
    getUser()
  },[])

console.log(data)
  return (
    <Postdiv>
      <Postdivtop>
        <Postdivtopleft>
          <PersonOutlineIcon />
        </Postdivtopleft>
        <Postdivtopright>{userData?.name}</Postdivtopright>
      </Postdivtop>
      <Postdivmiddle>
        {data.postContent}
      </Postdivmiddle>
      <Postdivbottom>
        <Postdivbottomleft>
          <PostdivbottomleftLL>
            <StyledFavoriteBorderIcon />
          </PostdivbottomleftLL>
          24 Likes
        </Postdivbottomleft>
        <Postdivbottomright>
          <Button onClick={handleOpen}>Comments</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} style={{overflow: "scroll"}}>
              <div>
                <div>Add Comments</div>
              <CommentInput type="text" />
              <CommentAddButton>Add</CommentAddButton>
              </div>
              <CommDiv>
              <div>Display Comments</div>
              <DisplayComments/>
              </CommDiv>
            </Box>
          </Modal>
        </Postdivbottomright>
      </Postdivbottom>
    </Postdiv>
  );
};

export default PostComponent;
