import React, { useState } from 'react';
import api from '../../services/api';
import { User } from '../../interfaces/user';
import {
    Typography
} from '@material-ui/core';
import { StyledCard, StyledCardContent, StyledCardMedia, StyledContainer, StyledLink, StyledButton, StyledParagraphy } from './styles';


const UserList: React.FC = () => {    
    const [users, setUsers] = useState([]);

    async function searchUsers() {

        const response = await api.get('/v1/user?limit=100');
        console.log(response.data.result);
        setUsers(response.data.result.data);
    }

    return ( 
        <div>
            <StyledParagraphy>
                <StyledButton variant="outlined" onClick={searchUsers}>
                    Clique Aqui
                </StyledButton>
            </StyledParagraphy>
            <StyledContainer>{
                users.map((user: User) => {
                    return (
                        <StyledCard id={user.hash}>
                            <StyledCardMedia
                                image={user.imageUrl}
                                title={`${user.name} ${user.surname}`}
                            />
                            <StyledCardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    Sobrenome: {user.surname}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <StyledLink href={user.email} target="_blank">E-mail</StyledLink>
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <StyledLink href={user.instagram} target="_blank">Instagram</StyledLink>
                                </Typography>
                                <Typography variant="body2" component="p">
                                    <StyledLink href={user.twitter} target="_blank">Twitter</StyledLink>
                                </Typography>
                            </StyledCardContent>
                        </StyledCard>
                    )
                })
            }</StyledContainer>
        </div>
    )
};

export default UserList;    