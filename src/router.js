import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import Login from "./views/login-view/login";
import WorkArea from "./views/common/workarea/workarea";
import MenuBar from "./views/common/menu-bar/menuBar";
import AUTH from './views/login-view/utils'

export default function AppRouter() {
    return (
        <WorkArea>
            <Router>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/home/dashboard" exact>
                    {AUTH.checkAuth() ? <MenuBar /> : <Redirect to="/login"/> }
                </Route>
            </Router>
        </WorkArea>
    );
}
