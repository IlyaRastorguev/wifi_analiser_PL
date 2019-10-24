import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Route, Redirect
} from "react-router-dom";
import Login from "./login-view/login";
import WorkArea from "./common/workarea/workarea";
import MenuBar from "./common/menu-bar/menuBar";
import authUtils from './login-view/utils'

export default function AppRouter() {
    const [authStatus, update] = useState(false);

    useEffect(() => {
        update(authUtils.checkAuth())
    });

    return (
        <WorkArea>
            <Router>
                <Route path="/" exact>
                    <Redirect to="/login"/>
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/home/dashboard" exact>
                    {authStatus ? <MenuBar /> : <Redirect to="/login"/> }
                </Route>
            </Router>
        </WorkArea>
    );
}
