import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import AuthContext from '../../contexts/Auth';
import { Google } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';

interface Props {
    title: string;
}

const ButtonLoginGoogle: React.FC<Props> = (props) => {
    const context = useContext(AuthContext);
    const history = useHistory();

    async function handleLogin() {
        try {
            await context.LoginGoogle();
            if (context.isSigned) 
                history.push('/app');
        } catch (err) {
        console.log(err);
        }
    }
    
    return (
        <>
            <Button variant='contained' startIcon={<Google />} onClick={handleLogin}>
                {props.title}
            </Button>
        </>
    )
};

export default ButtonLoginGoogle;