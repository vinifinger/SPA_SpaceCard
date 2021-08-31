import { Grid } from "@material-ui/core";
import styled from "styled-components";
import BgLogin from "../../assets/bg-login.png";

export const GridImage = styled(Grid)`
    background-image: url(${BgLogin});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 100%!important;
    flex-basis: 100%!important;
    filter: brightness(0.5);
`; 