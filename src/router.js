import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./views/login-view/login";
import WorkArea from "./views/common/workarea/workarea";
import MenuBar from "./views/common/menu-bar/menuBar";

export default function AppRouter() {
    return (
        <WorkArea>
            <Router>
                <Route path="/">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/home/dashboard">
                            <MenuBar />
                        </Route>
                    </Switch>
                </Route>
            </Router>
        </WorkArea>
    );
}