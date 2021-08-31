import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import styled from "styled-components";

export const StyledForm = styled.form`
    width: 90%;
    margin-top: 8px;
    border-top: 2px solid #fff;
`;

export const StyledButtonSubmit = styled(Button)`
    margin: 24px 0px 16px !important;
    background: transparent linear-gradient(270deg, #921508 0%, #29100D 100%) 0% 0% no-repeat padding-box;
    padding: 10px!important;
`;

export const StyledAlert = styled(Alert)`
    margin-top: 20px;

    &.hidden {
        display: none !important;
    }
    
    &.error {
        display: flex !important;
    }
`;

export const StyledTextField = styled(TextField)`
    &.inputRounded, .MuiOutlinedInput-root{
        /*border-radius: 80px!important;*/
        background: #fff!important;
    }

    &.MuiInputLabel-outline d{
        transform: translate(30px, -6px) scale(0.75)!important;
    }
`;