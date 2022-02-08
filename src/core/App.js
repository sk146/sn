import React, {useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../helpers';
import {PrivateRoute} from '../template';
import {Dashboard} from '../pages/dashboard';
import {LoginPage} from '../pages/auth/login';
import {alertActions} from './alert/alert.actions.js';
import './App.css';
import {RegisterPage} from '../pages/auth/register';
import {UsersList} from '../pages/users/users-list';
import {UserCreationForm} from '../pages/users/user-creation-form';


const App = ({alert, clearAlerts}) => {
    useEffect(()=> {
        history.listen((location, action) => {
            // clear alert on location change
            clearAlerts();
        });
    },)
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <PrivateRoute exact path="/create-user" component={UserCreationForm}/>
                            <PrivateRoute exact path="/users" component={UsersList}/>
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
