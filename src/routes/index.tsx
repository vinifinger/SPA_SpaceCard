import React, { Component, useContext } from 'react';
import AuthContext from '../contexts/Auth';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';

function Routes() {
    const { isSigned } = useContext(AuthContext);
    console.log(isSigned);
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
          {...rest}
          render={props =>
            (
            isSigned ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
            )
          }
        />
      );

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route exact path="/logged" component={LandingPage} />
                <PrivateRoute path="/app" component={() => <h1>App</h1>} />
                <Route path="*" component={() => <h1>Page Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;