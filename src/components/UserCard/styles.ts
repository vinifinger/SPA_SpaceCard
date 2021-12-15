import styled from 'styled-components';
import { Card, CardContent, CardMedia, Container, Link, Button } from '@material-ui/core';

export const StyledCard = styled(Card)`
    max-width: 395px;
    margin-top: 2.4rem;
    background-color: var(--primary) !important;
`;

export const StyledContainer = styled(Container)`
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    align-content: space-between;
`;

export const StyledCardContent = styled(CardContent)`
    background-color: var(--primary) !important;
    color: var(--white);
`

export const StyledCardMedia = styled(CardMedia)`
    height: 260px;
    width: 100%;
    object-fit: cover;
    background-position: center center !important; 
`

export const StyledLink = styled(Link)`
    color: var(--white) !important;
`

export const StyledButton = styled(Button)`
    margin: 8px !important;
    color: var(--white) !important;
    background-color: var(--secondary) !important;
`

export const StyledParagraphy = styled.p`
    text-align: center;
`