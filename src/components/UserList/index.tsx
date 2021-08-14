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

        const response = await api.get('/v1/user', { headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJoYXNoIjoiNWU5YTRlYWQtOWQ0Ni00ZWU0LWJlZDAtNzVkMjg3MDg2ZjY5IiwibmFtZSI6IkJyZW5kb3UiLCJzdXJuYW1lIjoiTGVpdGUiLCJlbWFpbCI6ImJyZW5kb3VmZWxpekBlbWFpbC5jb20iLCJmYWNlYm9vayI6ImZhY2Vib29rIiwibGlua2VkaW4iOiJsaW5rZWRpbiIsImRhdGVfaW5zZXJ0IjoiMjAyMS0wOC0wM1QyMjo1NToxMy4wMDBaIiwic3RhdHVzIjoxLCJ0d2l0dGVyIjoidHdpdHRlciIsInBhc3N3b3JkIjoiVTJGc2RHVmtYMS9HMmJVdlFPYXpzcDRTdmVZMXNhcnhJS3NxRlBORHBXQT0iLCJ0ZWxlcGhvbmUiOiJ0ZWxlZm9uZSIsImluc3RhZ3JhbSI6Imluc3RhZ3JhbSIsIndoYXRzYXBwIjoid2hhdHNhcHAiLCJ0ZWxlZ3JhbSI6InRlbGVncmFtIiwidGlrdG9rIjoidGlrdG9rIiwic3BvdGlmeSI6InNwb3RpZnkiLCJ5b3V0dWJlIjoieW91dHViZSIsIndpbGRjYXJkXzEiOiJ3aWxkY2FyZF8xIiwid2lsZGNhcmRfMiI6IndpbGRjYXJkXzIiLCJ3aWxkY2FyZF8zIjoid2lsZGNhcmRfMyIsImVuZF9zdGF0ZSI6ImVzdGFkbyIsImVuZF9jaXR5IjoiY2lkYWRlIiwiZW5kX251bWJlciI6Im51bWVybyIsImVuZF9kaXN0cmljdCI6ImJhaXJybyIsImVuZF9jZXAiOiJjZXAifSwiaWF0IjoxNjI4OTAxMzczLCJleHAiOjE2Mjg5MzAxNzN9.xpAL3OheKz0TP1G5H5ZLOkTJKDaj4iwwpT2kblUxU-E'}});
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