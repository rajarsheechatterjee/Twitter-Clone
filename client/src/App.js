import React, { Fragment, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import Profile from "./pages/Profile/Profile";
import HomePage from "./pages/HomePage/HomePage";
import Alert from "./components/Alert/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/ProfileForm/CreateProfile";
import EditProfile from "./components/ProfileForm/EditProfile";
import Profiles from "./pages/Profiles/Profiles";
import Tweet from "./pages/Tweet/Tweet";
import Bookmarks from "./pages/Bookmarks/Bookmarks";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Alert />
                    <Switch>
                        <Redirect exact from="/" to="/home" />
                        <Route exact path="/profiles" component={Profiles} />
                        <PrivateRoute
                            exact
                            path="/profile/me"
                            component={UserProfile}
                        />
                        <PrivateRoute
                            exact
                            path="/bookmarks"
                            component={Bookmarks}
                        />
                        <PrivateRoute
                            exact
                            path="/profile/:id"
                            component={Profile}
                        />
                        <PrivateRoute
                            exact
                            path="/tweets/:id"
                            component={Tweet}
                        />
                        <PrivateRoute
                            exact
                            path="/createprofile"
                            component={CreateProfile}
                        />
                        <PrivateRoute
                            exact
                            path="/editprofile"
                            component={EditProfile}
                        />
                        <PrivateRoute exact path="/home" component={HomePage} />
                        <Route
                            exact
                            path="/register"
                            component={RegisterPage}
                        />
                        <Route exact path="/login" component={LoginPage} />
                    </Switch>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
