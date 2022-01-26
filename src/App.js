import React, { useState } from 'react';
import './App.css';
import Home from "./components/home";
import {Route, Switch} from "react-router-dom";
import Header from "./components/header";
import user from "./components/user";
import admin from "./components/admin";
import Login from "./components/login";
import loggedIn from "./components/loggedin";
//import "bootstrap/dist/css/bootstrap/.min.css";
import NoMatch from "./components/NoMatch";
import facade from "./apiFacade";
import Currency from "./components/currency";
import result from "./components/result";


console.log("Facade fra APP.JS");
console.log(facade);
function App() {
  const [loggedIn, setLoggedIn] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage("Logged out");

    };

    const login = (user, pass) => {
      facade.login(user, pass, setLoggedIn, setErrorMessage);
    };

    //<Route path='/' element={<Home />} />
    return (
      <div>
        <Header facade = {facade} />
        <Switch>
          <Route exact path ="/" >
          <Home
          facade={facade}
          loggedIn={loggedIn}
            errorMessage={errorMessage}
            login={login}
            logout ={logout} 
            setLoggedIn = {setLoggedIn}
            setErrorMessage = {setErrorMessage} />
            </Route>


          <Route exact path = "/user" element ={user} />

          <Route exact path="/admin" element={admin}/>

          <Route exact path="/currency">
            <Currency facade={facade}/>

          </Route>

          <Route exact path="/result" element={result}/>

          <Route path ="*" element={<NoMatch/>}/>

        </Switch>
      </div>
    );  
}

export default App;