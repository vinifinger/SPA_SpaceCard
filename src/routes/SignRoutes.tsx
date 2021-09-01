import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';

function SignRoutes() {
    return (
        <BrowserRouter>
                <Route path="/login" exact component={Login} />
        </BrowserRouter>
    )
}

export default SignRoutes;