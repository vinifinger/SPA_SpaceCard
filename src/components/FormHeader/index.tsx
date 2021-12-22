import React from 'react';
import { StyledTypography } from './styles';

interface Props {
    title: string;
}

const FormHeader: React.FC<Props> = (props) => {
    return (
        <>
            <StyledTypography>
                {props.title}
            </StyledTypography>
        </>
    )
};

export default FormHeader;