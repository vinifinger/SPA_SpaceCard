import React, { useState } from 'react';
import api from '../../services/api';
import {
    Typography
} from '@material-ui/core';
import { StyledCard, StyledCardContent, StyledCardMedia, StyledContainer, StyledLink, StyledButton, StyledParagraphy } from './styles';

interface User {
    id: number,
    hash: string,
    name: string,
    surname: string,
    email: string,
    facebook: string,
    linkedin: string,
    date_insert: string,
    status: number,
    twitter: string,
    password: string,
    telephone: string,
    instagram: string,
    whatsapp: string,
    telegram: string,
    tiktok: string,
    spotify: string,
    youtube: string,
    wildcard_1: string,
    wildcard_2: string,
    wildcard_3: string,
    end_city: string,
    end_number: string,
    end_district: string,
    end_cep: string
}

const UserList: React.FC = () => {    
    const [users, setUsers] = useState([]);

    async function searchUsers() {

        const response = await api.get('/v1/user');
        console.log(response.data.result);
        setUsers(response.data.result);
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
                        <StyledCard>
                            <StyledCardMedia
                                image={user.wildcard_1}
                                title="Photo User"
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