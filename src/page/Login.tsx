import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import App from "../App";
import "../styles/Home.css";

interface LoginUserShape {
  username: any;
  password: any;
}
interface userProp {
  username: any;
  password: any;
  balance?: any;
}
interface eventMethodProps {
  eventLogin: (value: {}) => void;
  handleLoginState: (value: boolean) => void;
  userArray: userProp[];
}
const Login = ({
  eventLogin,
  userArray,
  handleLoginState,
}: eventMethodProps) => {
  let navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [usernameMessage, setUsernameMessage] = useState('')
  const HandleSubmit = (e: any) => {
    e.preventDefault();
    let userObject: LoginUserShape = {
      username: username,
      password: password,
    };
    setLoginUser(userObject);
  };

  function handleUserLogin(user: LoginUserShape) {
    let tempArray = userArray;
    let usernameArray = Object.assign(
      {},
      ...tempArray.map((x, i) => ({ [x.username]: i }))
    );
    let usernamePosition = usernameArray[user.username];
    if (usernamePosition !== undefined) {
      if (tempArray[usernamePosition].password === user.password) {
        eventLogin(userArray[usernamePosition]);
        console.log("login successful");
        navigate("/dashboard");
        handleLoginState(true);
      } else {
        console.log("Password Incorrect");
        
      }
    } else {
      console.log("Username not found");
      setUsernameMessage('notFound')
    }
  }

  useEffect(() => {
    if (loginUser.username.length > 0) {
      handleUserLogin(loginUser);
    }
  });

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1>Please Login</h1>
        <div>
          <label>
            <p>Username</p>
            <input className={usernameMessage}type="text" onChange={(e) => setUserName(e.target.value)} />
            
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="btn-wrapper">
            <button
              className="btn-submit"
              type="submit"
              onClick={HandleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="navigation-wrapper">
          <span>
            Don't have an account? 
            <Link to="/signup">Sign up</Link>
          </span>

          <span>
            Go Back <Link to="/">Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
