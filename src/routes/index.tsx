// import React, { useContext } from 'react';
// import AuthContext from '../contexts/Auth';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import UserPage from '../pages/User';

function Routes() {
    // const { isSigned, user } = useContext(AuthContext);
    // console.log(isSigned + ' - ' + JSON.stringify(user));
    // const PrivateRoute = ({ component: Component, ...rest }) => (
    //     <Route
    //       {...rest}
    //       render={(props) =>
    //         (
    //             isSigned ? (
    //                 <Component {...props} />
    //             ) : (
    //                 <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    //             )
    //         )
    //       }
    //     />
    //   );

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" >
                    <h1>Space Card</h1>
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/user/:username" component={UserPage} />
                <Route path="/logged" component={LandingPage} />
                <Route path="/app" component={() => <h1>App</h1>} />
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