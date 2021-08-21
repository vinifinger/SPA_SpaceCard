import { Grid } from "@material-ui/core";
import styled from "styled-components";

export const StyledDivController = styled.div`
    margin: 64px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledGrid = styled(Grid)`
    height: 100vh !important;
`;

export const StyledFormDiv = styled(Grid)`
    position: absolute!important;
    right: 5%!important;
    bottom: 5%!important;
    background-color: #a7a7a7c4!important;
    border-radius: 10px!important;
    height: 90%;
`; 