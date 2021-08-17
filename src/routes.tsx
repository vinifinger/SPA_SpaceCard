import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import LandingPage from './pages/LandingPage';

function Routes() {
    return (
        <BrowserRouter>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" component={Login} />
        </BrowserRouter>
    )
}

export default Routes;