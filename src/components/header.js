import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink,
    Prompt, useHistory
} from "react-router-dom";
import loggedIn from "./loggedin";



 const Header = ({facade})=>{
     const history = useHistory();

     const onClick= () => {
         facade.onLogout()
         facade.setCurrentRoles([])
         history.push('/')
     }

    return (
        <div>
            <ul className="header">

                {facade.hasUserAccess('user') && <li><NavLink activeClassName='active' to='/user'>User</NavLink></li>}
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/user">User</NavLink></li>
                <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
                <li><NavLink activeClassName="active" to="/currency">Currency Converter</NavLink></li>

            </ul>
        </div>
    )
}


export default Header;