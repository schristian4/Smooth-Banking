import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { RandomBalance, RandomDigits } from "../../Methods/methods"
import { userProp } from '../../libs/component';
import InputField, {textValidations }  from '../InputField'


interface eventMethodProps {
  eventSetSignup: (value: {}) => void;
}

const Signup = ({ eventSetSignup }: eventMethodProps) => {
  let navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    let randomBalance = RandomBalance();
    let randomDigits = RandomDigits();
    let userObject: userProp = {
      username: username,
      password: password,
      balance: randomBalance,
      digits: randomDigits
    };
    const validateContent = ValidateSignupUsername(username, password)
    if(validateContent === true){
      setNewUser(userObject);
    }
  };

  const ValidateSignupUsername = (username: string, password: string) =>{
    let usernameCondition = RegExp(textValidations['username']['regStrict']).test(username) ;
    let passwordCondition = RegExp(textValidations['password']['reg']).test(password) ;
    if (usernameCondition === false && passwordCondition === false) {
      setShowErrorMessage(true)
      return false
    }
    if (usernameCondition === true && passwordCondition === true) {
      setShowErrorMessage(false)
      return true
    } 
    else {
      return false
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
    if (Object.keys(newUser).length > 0) {
      eventSetSignup(newUser);
      navigate("/login");
    }
  });

  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="form__group__Wrapper">
          <h1>SIGN UP</h1>
          <InputField type="text" label="username" onChange={handleUsernameEntry} username={username} password={password} showErrorMessage={showErrorMessage} />
          <InputField type="password" label="password" onChange={handlePasswordEntry} username={username} password={password} showErrorMessage={showErrorMessage} />
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
            <span>Already a user? &nbsp;</span>
            <Link to="/login">LOGIN</Link>
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

export default Signup;
