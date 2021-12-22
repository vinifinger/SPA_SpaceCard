import { Box, Checkbox, FormControlLabel, Grid, Link, InputAdornment, IconButton, Snackbar } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Copyright from '../Copyright';
import React, { useContext, useState } from 'react';

import { StyledButtonSubmit, StyledForm, StyledTextField } from './styles'; 
import { Alert } from '@material-ui/lab';
import AuthContext from '../../contexts/Auth';
import { useHistory } from 'react-router-dom';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);
  const [failedMessage, setFailedMessage] = useState('');
  const history = useHistory();
  const context = useContext(AuthContext);

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  async function handleSignUp() {
    try {
      await context.SignUpEmailAndPassword(email, password);
      if (context.isSigned) 
          history.push('/app');
      } catch (err) {
      const error = err ? String(err) : 'Email e/ou senha inválido';
      setFailed(true);
      setFailedMessage(error);
    }
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway')
        return;

    setFailed(false);
  };    

  return (
    <StyledForm noValidate>
      <Snackbar open={failed} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
              {failedMessage}
          </Alert>
      </Snackbar>
      <StyledTextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Endereço de E-mail"
        name="email"
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
      />
      <StyledTextField
        variant="filled"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type={values.showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={(event) => { setPassword(event.target.value) }}
        InputProps={{
          endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
          )
        }}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <StyledButtonSubmit
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignUp}
      >
      Entrar
      </StyledButtonSubmit>
      <Grid container>
      <Grid item xs>
          <Link href="#" variant="body2">
            {"Esqueceu a senha?"}
          </Link>
      </Grid>
      <Grid item>
          <Link href="/login" variant="body2">
            {"Já tem uma conta? Logue"}
          </Link>
      </Grid>
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </StyledForm>
  )
};

export default SignUpForm;