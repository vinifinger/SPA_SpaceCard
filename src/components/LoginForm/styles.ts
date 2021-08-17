import { Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import styled from "styled-components";
import { Props } from '.';

export const StyledForm = styled.form`
    width: 100%;
    margin-top: 8px;
`;

export const StyledButtonSubmit = styled(Button)`
    margin: 24px 0px 16px !important;
`;

export const StyledAlert = styled(Alert)`

    &.hidden {
        display: none !important;
    }
    
    &.error {
        display: flex !important;
    }
`;