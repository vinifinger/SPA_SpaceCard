import { CssBaseline } from '@material-ui/core';
import React, { useState } from 'react';

import GridImage from '../../components/LoginWallpaper';
import LoginForm from '../../components/LoginForm';
import LoginHeader from '../../components/LoginHeader';

import { StyledDivController, StyledGrid, StyledFormDiv } from './styles';

function Login() {
  return (
    <StyledGrid container>
        <CssBaseline />
        <GridImage />
        <StyledFormDiv item xs={12} sm={8} md={5} >
            <StyledDivController>
            <LoginHeader />
            <LoginForm />            
            </StyledDivController>
        </StyledFormDiv>
    </StyledGrid>
  );
}

export default Login;