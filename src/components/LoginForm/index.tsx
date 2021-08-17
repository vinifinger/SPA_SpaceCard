import { Box, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from '@material-ui/core';
import Copyright from '../Copyright';
import React, { useState } from 'react';

import { StyledButtonSubmit, StyledForm } from './styles'; 
import api from '../../services/api';
import { StyledTypography } from './styles';

export interface Props {
    error?: string;
}

const LoginForm: React.FC<Props> = ({
    error
}) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {

        try {
            const response = await api.post('/user/login', {email: email, password: password});
            console.log(response);
        } catch(err) { 
            console.log(err);   
            setLogin('Error');
        }
    }

    return (
        <StyledForm noValidate>
            <StyledTypography align="center" variant="h5" paragraph className={error ? 'error' : ''}>{login}</StyledTypography>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(event) => { setEmail(event.target.value) }}
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
            <StyledButtonSubmit
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            >
            Sign In
            </StyledButtonSubmit>
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password? {login}
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
            </Grid>
            <Box mt={5}>
            <Copyright />
            </Box>
        </StyledForm>
    )
};

export default LoginForm;