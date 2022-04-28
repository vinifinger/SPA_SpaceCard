import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/Auth';
import { StyledLink, StyledButton, StyledTypography, StyledAppBar, StyledToolbar } from './styles';

const Header: React.FC = () => {
    const context = useContext(AuthContext);
    const history = useHistory();


    async function handleLogout() {
        try {
            context.Logout();
            history.push('/login');
        } catch(err) {
            throw err;
        }
    }

    return ( 
        <StyledAppBar position="static" elevation={0}>
            <StyledToolbar>
            <StyledTypography variant="h6" noWrap>
                Space Card!
            </StyledTypography>
            <nav>
                <StyledLink variant="button" href="#">
                Features
                </StyledLink>
                <StyledLink variant="button" href="#">
                Enterprise
                </StyledLink>
                <StyledLink variant="button" href="#">
                Support
                </StyledLink>
            </nav>
            <StyledButton onClick={handleLogout} variant="outlined">
                Logout
            </StyledButton>
            </StyledToolbar>
        </StyledAppBar>        
    )
};

export default Header;