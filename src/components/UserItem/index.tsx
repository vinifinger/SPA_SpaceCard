import React from 'react';
import { User } from '../../interfaces/user';
import { Typography } from '@material-ui/core';

import { 
    StyledCard, 
    StyledCardContent, 
    StyledCardMedia, 
    StyledContainer,
} from './styles';
import { Skeleton } from '@material-ui/lab';


const UserItem: React.FC<User> = (props) => {
    return (
        <StyledContainer>
            <StyledCard id={props.hash}>
                { props.imageUrl ?
                    <StyledCardMedia
                        image={props.imageUrl || 'https://www.instagram.com/p/CVOaS9lJZAY/'}
                        title={`${props.name} ${props.surname}`}
                    /> :
                    <Skeleton variant="rect" animation="wave" width={350} height={150} />
                } 
                
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h1" style={{ fontWeight: 450 }} align='center'>
                        {props.name} {props.surname}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" style={{ fontWeight: 250 }} align='center'>
                        E-mail: {props.email}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" style={{ fontWeight: 250 }} align='center'>
                        Username: {props.username}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" style={{ fontWeight: 250 }} align='center'>
                        Telephone: {props.telephone}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" style={{ fontWeight: 250 }} align='center'>
                        Bio: {props.bio}
                    </Typography>
                    
                </StyledCardContent>
            </StyledCard>
        </StyledContainer>
    )
};

export default UserItem;    