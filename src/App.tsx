import React, { useState, useEffect } from "react";

import ViewLayout from "./components/ViewLayout";
import DashboardPage from "./page/Dashboard";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Protected from "./page/Protected";
import Home from "./page/Home";
import "./App.css";
var iconlogout = require('./icons/logout.png')

export const UserContext = React.createContext({});
// export const LoginState = React.createContext(false);
let defaultUser = {
  username: "",
  password: "",
  balance: 0,
};
export interface userProp {
  username: any;
  password: any;
  balance?: any;
}
function App() {
  // let navigate = useNavigate();
  // const [token, setToken] = useState();
  const [user, setUser] = useState<userProp>(defaultUser);
  const [newUser, setNewUser] = useState({});
  const [userArray, setUserArray] = useState<userProp[]>([]);
  const [userPosition, setUserPosition] = useState(0);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const logOut = () => {
    setisLoggedIn(false);
    setUser(defaultUser)
    debugger;
    // setUserPosition(0);
  };
  interface InsertMethods {
    eventSignup(value: {}): void;
    eventLogin(value: {}): void;
  }
  const useInsertMethods = (): InsertMethods[] => [
    {
      eventSignup: (value: {}) => setNewUser(value),
      eventLogin: (value: userProp) => setUser(value),
    },
  ];
  const insertProp = useInsertMethods();

  function handleNewUserConfig() {
    let temp: any[] = userArray;
    temp.push(newUser);
    setUserArray(temp);
    setNewUser({})
  }
  function updateUserData(value: userProp){
    setUser(value)
  }
  function handleUserPosition(value: number) {
    setUserPosition(value);
  }
  function handleLoginState(value: boolean) {
    setisLoggedIn(value);
  }
  useEffect(() => {
    if (Object.keys(newUser).length > 0) {
      handleNewUserConfig();
    }
  });
  function renderPath() {
    return isLoggedIn ? "/dashboard" : "/";
  }
  function RenderView() {
    if (isLoggedIn === false) {
      return (
        <>
          <Home />
        </>
      );
    } else {
      return (
        <>
          <DashboardPage user={user} loginState={isLoggedIn} updateUserData={updateUserData}/>
        </>
      );
    }
  }
  return (
    <ViewLayout>
      {isLoggedIn ? 
      <div className="icon-wrapper">
            <div onClick={logOut}><img className="logout-icon" src={iconlogout} alt="Logout Icon" /></div> 
        </div>: <></>}
      <BrowserRouter>
        <Routes>
          <Route path={renderPath()} element={<RenderView />} />
          <Route
            path="/login"
            element={
              <Login
                eventLogin={insertProp[0].eventLogin}
                userArray={userArray}
                handleUserPosition={handleUserPosition}
                handleLoginState={handleLoginState}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup eventSignup={insertProp[0].eventSignup} />}
          />
          <Route
          path="/Dashboard"
          element={ <DashboardPage user={user} loginState={isLoggedIn} updateUserData={updateUserData}/>}
          />
        </Routes>
      </BrowserRouter>
    </ViewLayout>
  );
}

export default App;
