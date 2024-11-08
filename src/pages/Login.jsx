import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
// import {loginValidationSchema} from "../schemas/validationSchema";
import { publicRequest } from "../../requestMethods";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/userRedux";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../MyContext";

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;  
`;

const LoginContainer = styled.div`
  padding: 20px;
  width: 25%;
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
`;

const Title = styled.h3`
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const Input = styled.input`
  flex:1;
  margin: 10px 0px;
  min-width: 40%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-image: linear-gradient(to right, #c004e6, #ff0061);
    color: white;
    cursor: pointer;
    margin: 10px auto;
    border-radius: 5px;

`

const LinkPage = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  padding: 5px;
  margin: auto;
`

const Error = styled.div`
  color: red;
  font-size: 14px;
`;

const LinkItem = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
    const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]= useState(false)
  const navigate = useNavigate()
  const {user , setUser} = useContext(MyContext)

  window.addEventListener("popstate", function(e){
    navigate(-2)
  })

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const loginResponse = await publicRequest.post("/user/login", {email: username, password: password})
      console.log(loginResponse.data)
      localStorage.setItem("data", JSON.stringify(loginResponse.data.data))
      setUser(loginResponse.data.data)
          navigate("/")
    //    dispatch(login(loginResponse.data.data))
    //    if(loginResponse.data.message == "Login Successful"){
        // await new Promise((resolve) => setTimeout(resolve,1000))
        // window.location.reload()
    //    }
      
    //  return redirect("/")
    } catch (error) {
      console.log(error)
      setError(true)
    }
    
  }




  return (
    <MainDiv>
      <LoginContainer>
        <Title>SIGN IN</Title>
        <Form >
            <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={onSubmit}>LOGIN</Button>
            {error && <Error>Something Went wrong...</Error>}
            <LinkItem to="/register">CREATE NEW ACCOUNT</LinkItem>
        </Form>
      </LoginContainer>
    </MainDiv>
  );
};

export default Login;
