import { CssBaseline } from '@material-ui/core';

import GridImage from '../../components/LoginWallpaper';
import LoginForm from '../../components/LoginForm';
import FormHeader from '../../components/FormHeader';
import ButtonLoginGoogle from '../../components/ButtonLoginGoogle';

import { StyledDivController, StyledGrid, StyledFormDiv } from './styles';

function Login() {

  return (
    <StyledGrid container>
        <CssBaseline />
        <GridImage />
        <StyledFormDiv item xs={12} sm={8} md={5} >
            <StyledDivController>
            <FormHeader title='Entrar na conta'/>
            <ButtonLoginGoogle title='Entrar com Google' />
            <LoginForm />            
            </StyledDivController>
        </StyledFormDiv>
    </StyledGrid>
  );
}

export default Login;