import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Home.css";
import {RandomBalance, RandomDigits} from "../Math/RandomCalc";

interface userProp {
  username: any;
  password: any;
  balance: any;
  digits: any
}

interface eventMethodProps {
  eventSignup: (value: {}) => void;
}

const Signup = ({ eventSignup }: eventMethodProps) => {
  let navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({});

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
    setNewUser(userObject);
  };
  useEffect(() => {
    if (Object.keys(newUser).length > 0) {
      eventSignup(newUser);
      navigate("/");
    }
  });

  return (
    <div className="container">
      <div className="content-wrapper">
        <h1>Please Sign up</h1>
        <div>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
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
              className="btn btn-submit" type="submit" onClick={HandleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="navigation-wrapper">
          <span>
            Already have an account?
            <Link to="/login">Login</Link>
          </span>
          <br />
          <span>
            Go Back <Link to="/">Home</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
