import { Button, CssBaseline } from '@material-ui/core';

import GridImage from '../../components/LoginWallpaper';
import LoginForm from '../../components/LoginForm';
import LoginHeader from '../../components/LoginHeader';

import { StyledDivController, StyledGrid, StyledFormDiv } from './styles';
import AuthContext from '../../contexts/Auth';
import { useContext } from 'react';

function Login() {
  const context = useContext(AuthContext);

  async function handleLogin() {
    try {
      context.LoginGoogle();
    } catch (err) {
      console.log(err);
    }
}

  return (
    <StyledGrid container>
        <CssBaseline />
        <GridImage />
        <StyledFormDiv item xs={12} sm={8} md={5} >
            <StyledDivController>
            <LoginHeader />
            <div>
              <Button onClick={handleLogin}>
                Entrar com Google
              </Button>
            </div>
            <LoginForm />            
            </StyledDivController>
        </StyledFormDiv>
    </StyledGrid>
  );
}

export default Login;