import styled from 'styled-components';
import { Card, CardContent, CardMedia, Container, Link, Button } from '@material-ui/core';

export const StyledCard = styled(Card)`
    width: 395px;
    margin-top: 2.4rem;
    background-color: var(--primary) !important;
    height: 100%;
`;

export const StyledContainer = styled(Container)`
    display: flex !important;
    height: 100%;
    justify-content: center;
    color: var(--mention-detail);
    align-items: center;
`;

export const StyledCardContent = styled(CardContent)`
    background-color: var(--background) !important;
    color: var(--mention-message);
`

export const StyledCardMedia = styled(CardMedia)`
    height: 350px;
    width: 100%;
    object-fit: cover;
    background-position: center center !important; 
`

export const StyledLink = styled(Link)`
    color: var(--mention-message) !important;
    margin: 3px !important;
    align-items: center;
`

export const StyledButton = styled(Button)`
    margin: 8px !important;
    color: var(--white) !important;
    background-color: var(--secondary) !important;
`

export const StyledParagraphy = styled.p`
    text-align: center;
    justify-content: center !important;
`

export const StyledLinkLinkedIn = styled(Link)`
    /* color: var(--linkedin) !important; */
    margin: 3px !important;
    align-items: center;
`