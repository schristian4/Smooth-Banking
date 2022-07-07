import React, { useState, useEffect } from "react";

import ViewLayout from "./components/Views/ViewLayout";
import DashboardPage from "./components/Pages/Dashboard";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import ViewSwitch from "./components/Views/ViewHomeOrDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InsertMethods, userProp } from './libs/component';



// import Home from "./components/page/Home";
import "./App.css";
var iconlogout = require('./icons/logout.png')

export const UserContext = React.createContext({});
// export const LoginState = React.createContext(false);
let defaultUser = {
  username: "",
  password: "",
  balance: 0,
  digits: []
};

function App() {

  const [user, setUser] = useState<userProp>(defaultUser);
  const [newUser, setNewUser] = useState({});
  const [userArray, setUserArray] = useState<userProp[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const useInsertMethods = (): InsertMethods[] => [
    {
      //setState Variables
      eventSetSignup: (value: {}) => setNewUser(value),
      eventSetLogin: (value: userProp) => setUser(value),
      eventIsLoggedIn: (value: boolean) => setIsLoggedIn(value),
      //useState Variables
      state_user: user,
      state_newUser: newUser,
      state_userArray: userArray,
      state_isLoggedIn: isLoggedIn
    },
  ];

  const insertProp = useInsertMethods()[0];

  const logOut = () => {
    setIsLoggedIn(false);
    setUser(defaultUser)
  };
  function handleNewUserConfig() {
    let temp: any[] = [...userArray];
    temp.push(newUser);
    setUserArray(temp);
    setNewUser({})
  }
  
  function routePath() {
    return isLoggedIn ? "/dashboard" : "/";
  }

  useEffect(() => {
    if (Object.keys(newUser).length > 0) {
      handleNewUserConfig();
    }
  });

  return (
    <ViewLayout>
      {isLoggedIn ?
        <div className="icon-wrapper">
          <div onClick={logOut}><img className="logout-icon" src={iconlogout} alt="Logout Icon" /></div>
        </div> : <></>}
      <BrowserRouter>
        <Routes>
          <Route path={routePath()} element={<ViewSwitch insertProp={insertProp} />} />
          <Route
            path="/login"
            element={
              <Login
                eventSetLogin={insertProp.eventSetLogin}
                eventIsLoggedIn={insertProp.eventIsLoggedIn}
                userArray={userArray}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup eventSetSignup={insertProp.eventSetSignup} />}
          />
          <Route
            path="/Dashboard"
            element={<DashboardPage user={user} loginState={isLoggedIn} eventSetLogin={insertProp.eventSetLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </ViewLayout>
  );
}

export default App;
