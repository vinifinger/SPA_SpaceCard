import React, { useState } from 'react';
import { User } from '../../interfaces/user';
import {
    Typography
} from '@material-ui/core';
import { StyledCard, StyledCardContent, StyledCardMedia, StyledContainer, StyledLink, StyledButton, StyledParagraphy } from './styles';


const UserCard: React.FC<User> = (props) => {
    return (
        <div>
            <StyledCard id={props.hash}>
                <StyledCardMedia
                    image={props.imageUrl}
                    title={`${props.name} ${props.surname}`}
                />
                <StyledCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Sobrenome: {props.surname}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <StyledLink href={props.email} target="_blank">E-mail</StyledLink>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <StyledLink href={props.instagram} target="_blank">Instagram</StyledLink>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <StyledLink href={props.twitter} target="_blank">Twitter</StyledLink>
                    </Typography>
                </StyledCardContent>
            </StyledCard>
        </div>
    )
};

export default UserCard;    