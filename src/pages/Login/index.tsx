import { CssBaseline, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import GridImage from '../../components/LoginWallpaper';
import LoginForm from '../../components/LoginForm';
import LoginHeader from '../../components/LoginHeader';

import { StyledDivController, StyledGrid } from './styles';
import api from '../../services/api';

function Login() {
  return (
    <StyledGrid container>
        <CssBaseline />
        <GridImage />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <StyledDivController>
            <LoginHeader />
            <LoginForm />            
            </StyledDivController>
        </Grid>
    </StyledGrid>
  );
}

export default Login;