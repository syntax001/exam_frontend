import React, { useEffect, useState } from "react";
import Login from "./login";

function Home({ facade, loggedIn, errorMessage, login, logout, setLoggedIn, setErrorMessage }) {


    console.log(facade,"home");
    return (
        <div>
            <h1>Home</h1>
            {!loggedIn ? (
                <Login facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} />
            ) : (
                <div>
                    <p><button onClick={logout}>Log Out</button></p>
                    <p>Role: {facade.getUserRoles()}</p>
                </div>
            )}
        </div>
    );
}
export default Home;