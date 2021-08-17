import React from 'react';
import { StyledAvatar } from './styles';
import { LockOutlined } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const LoginHeader: React.FC = () => {
    return (
        <>
            <StyledAvatar>
                <LockOutlined />
            </StyledAvatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
        </>
    )
};

export default LoginHeader;