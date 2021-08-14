import styled from 'styled-components';
import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    Button
} from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)`
    flex-wrap: 'wrap';
`

export const StyledAppBar = styled(AppBar)`
` 

export const StyledTypography = styled(Typography)`
    flex-grow: 1;
    color: var(--white);
`

export const StyledLink = styled(Link)`
    margin: 8px !important;
    color: var(--white) !important;
`
export const StyledButton = styled(Button)`
    margin: 8px !important;
    color: var(--white) !important;
    background-color: var(--secondary) !important;
`