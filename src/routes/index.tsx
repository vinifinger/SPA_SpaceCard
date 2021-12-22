import React, { useContext } from 'react';
import AuthContext from '../contexts/Auth';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import UserPage from '../pages/User';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isSigned, loading } = useContext(AuthContext);
    if (loading) {
        return <h1>loading...</h1>;
    }

    return (
        <Route
        {...rest}
        render={(props) =>
            (
                isSigned ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            )
        }
        />
    )
};

function Routes() {  
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" >
                    <h1>Space Card</h1>
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/user/:username" component={UserPage} />
                <PrivateRoute path="/app" component={LandingPage} />
                <Route path="/404">
                    <h1>Page Not Found</h1>
                </Route>
                <Route exact path="/" >
                    <Redirect to="/home" />
                </Route>
                <Route path="*">
                    <Redirect to="/404" />    
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;