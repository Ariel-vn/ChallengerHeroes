import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomeScreen } from '../component/home/HomeScreen';
import { LoginScreen } from '../component/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/login" component={LoginScreen} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
