import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import { MyContext } from "./MyContext";
import CreatePost from "./pages/CreatePost";

const PrivateRoute = ({ isAuthenticated }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const [user, setUser] = useState({});
 const userData = JSON.parse(localStorage.getItem("data"))

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{ user, setUser }}>
          <Routes>
            {/* <Route path='/' element={<Home/>} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<PrivateRoute isAuthenticated={userData} />}>
              <Route path="/" element={<Home />} />
              <Route path="/createPost" element={<CreatePost />} />
            </Route>
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
