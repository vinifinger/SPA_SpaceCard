import React, { useState } from 'react';
import api from '../../services/api';
import { User } from '../../interfaces/user';
import UserCard from '../../components/UserCard';
import { StyledButton, StyledContainer, StyledParagraphy } from './styles';


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
                        <UserCard {...user} />
                    )
                })
            }</StyledContainer>
        </div>
    )
};

export default UserList;    