import React from "react";
import styled from "styled-components";

const DisplayCommentsDiv = styled.div`
  width: 100%;
  overflow-y: auto;
`;
const DisplayDiv = styled.div`
  display: flex;
`;

const Button = styled.button`
  height: 50px;
  margin: 5px;
`;

const DisplayComments = () => {
  return (
    <DisplayCommentsDiv>
      <DisplayDiv>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem.
          Expedita nesciunt odio adipisci nostrum voluptatibus autem rem minus
          quo, cupiditate numquam tempora dolorum, culpa ipsa nam sunt id quos.
        </div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </DisplayDiv>
      <DisplayDiv>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem.
          Expedita nesciunt odio adipisci nostrum voluptatibus autem rem minus
          quo, cupiditate numquam tempora dolorum, culpa ipsa nam sunt id quos.
        </div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </DisplayDiv>
      <DisplayDiv>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rem.
          Expedita nesciunt odio adipisci nostrum voluptatibus autem rem minus
          quo, cupiditate numquam tempora dolorum, culpa ipsa nam sunt id quos.
        </div>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </DisplayDiv>
    </DisplayCommentsDiv>
  );
};

export default DisplayComments;
