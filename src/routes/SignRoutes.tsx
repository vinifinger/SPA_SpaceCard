import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';

function SignRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default SignRoutes;