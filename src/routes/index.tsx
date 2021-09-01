import React, { useContext } from 'react';
import AuthContext from '../contexts/Auth';

import SignRoutes from './SignRoutes';
import OtherRoutes from './OthersRoutes';

function Routes() {
    const { signed } = useContext(AuthContext);

    return signed ? <OtherRoutes /> : <SignRoutes />;
}

export default Routes;