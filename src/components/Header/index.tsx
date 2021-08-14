import React from 'react';
import { StyledLink, StyledButton, StyledTypography, StyledAppBar, StyledToolbar } from './styles';

const Header: React.FC = () => {    
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
            <StyledButton href="#" variant="outlined">
                Login
            </StyledButton>
            </StyledToolbar>
        </StyledAppBar>        
    )
};

export default Header;