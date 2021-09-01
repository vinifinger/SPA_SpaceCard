import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

function OthersRoutes() {
    return (
        <BrowserRouter>
                <Route path="/" component={LandingPage} />
        </BrowserRouter>
    )
}

export default OthersRoutes;