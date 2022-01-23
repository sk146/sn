import React, {useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../../helpers';
import {PrivateRoute} from '../../components';
import {HomePage} from '../home';
import {LoginPage} from '../login';
import {RegisterPage} from '../register';
import {alertActions} from './alert/alert.actions.js';
import './App.css';


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
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
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
