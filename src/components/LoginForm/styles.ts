import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Props } from '.';

export const StyledForm = styled.form`
    width: 100%;
    margin-top: 8px;
`;

export const StyledButtonSubmit = styled(Button)`
    margin: 24px 0px 16px !important;
`;

export const StyledTypography = styled(Typography)<Props>`
    display: hidden;
    
    &:error {
        display: block;
        color: var(--rocketseat) !important;
    }
`;