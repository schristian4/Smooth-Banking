import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import { userProp } from '../../libs/component';
import InputField from '../InputField'

interface LoginUserShape {
  username: string;
  password: string;
}
interface eventMethodProps {
  eventIsLoggedIn: (value: boolean) => void;
  eventSetLogin: (value: userProp) => void;
  // handleLoginState: (value: boolean) => void;
  userArray: userProp[];
}
const Login = ({
  eventSetLogin,
  userArray,
  eventIsLoggedIn,
  // handleLoginState,/
}: eventMethodProps) => {
  let navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [alertMessage, setAlertMessage] = useState('')
  // const [showErrorMessage, setShowHide] = useState(false)
  
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
        eventSetLogin(userArray[usernamePosition]);
        console.log("login successful");
        navigate("/dashboard");
        eventIsLoggedIn(true);
      } else {
        setAlertMessage("Wrong password. Try again");
      }
    } else {
      setAlertMessage("Could't find your username");
    }
  }
  const handleUsernameEntry = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setUserName(target.value)
  }
  const handlePasswordEntry = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setPassword(target.value)
  }

  useEffect(() => {

    if (loginUser.username.length > 0) {
      handleUserLogin(loginUser);
    }
  });

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="form__group__Wrapper">
          {alertMessage ? <p>{alertMessage}</p> : <></>}
          <h1>LOGIN</h1>
          <InputField type="text" label="username" onChange={handleUsernameEntry} username={username} password={password} showErrorMessage={false} />
          <InputField type="password" label="password" onChange={handlePasswordEntry} username={username} password={password} showErrorMessage={false} />
        </div>
        <div className="btn-wrapper">
          <button
            className="btn btn-submit" type="submit" onClick={HandleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div className="center">
        <div className="navigation-wrapper">
          <span>
            <span>Don't have an account? &nbsp;</span>
            <Link to="/signup">SIGN UP</Link>
          </span>
          {/* <br /> */}
          {/* <span>
              Go: <Link to="/">Home</Link>
            </span> */}
        </div>
      </div>
    </div>
   
  );
};

export default Login;
