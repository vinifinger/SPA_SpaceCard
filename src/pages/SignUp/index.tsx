import { CssBaseline } from '@material-ui/core';

import GridImage from '../../components/LoginWallpaper';
import SignUpForm from '../../components/SignUpForm';
import FormHeader from '../../components/FormHeader';

import { StyledDivController, StyledGrid, StyledFormDiv } from './styles';

function SignUp() {

  return (
    <StyledGrid container>
        <CssBaseline />
        <GridImage />
        <StyledFormDiv item xs={12} sm={8} md={5} >
            <StyledDivController>
            <FormHeader title='Criar Conta'/>
            <SignUpForm />            
            </StyledDivController>
        </StyledFormDiv>
    </StyledGrid>
  );
}

export default SignUp;