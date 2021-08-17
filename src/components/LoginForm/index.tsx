import { Box, Checkbox, FormControlLabel, Grid, Link, TextField } from '@material-ui/core';
import Copyright from '../Copyright';
import React, { useState } from 'react';

import { StyledAlert, StyledButtonSubmit, StyledForm } from './styles'; 
import api from '../../services/api';

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
            if (response.status === 200){
                setLogin(response.data.message);
            }
        } catch(err) { 
            console.log(err);   
            setLogin('Error');
        }
    }

    return (
        <StyledForm noValidate>
            <StyledAlert variant="filled" severity="error" className={login ? 'error' : 'hidden'}>
            {login}
            </StyledAlert>
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
                Forgot password?
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