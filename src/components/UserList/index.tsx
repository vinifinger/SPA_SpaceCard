import React, { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import api from '../../services/api';
import { User } from '../../interfaces/user';
import UserItem from '../../components/UserItem';
import { StyledStack, StyledContainer, StyledParagraphy } from './styles';
import { Pagination, Stack } from '@mui/material';


const UserList: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [totalList, setTotalList] = useState(0);
    const [lastPage, setLastPage] = useState(10);
    const [perPage, setPerPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [from, setfrom] = useState(0);
    const [to, setTo] = useState(0);

    useEffect(() => {
        searchUsers();    
    }, []);

    function handleSearchUsers(e: ChangeEvent<unknown>, value: number) {
        e.preventDefault();
        searchUsers(value);
    }

    async function searchUsers(page: number = 1, limit: number = 10) {
        
        const response = await api.get(`/v1/user?limit=${limit}&page=${page}`);
        console.log(response.data.result);
        const pagination = response.data.result.pagination;
        setTotalList(pagination.total);
        setLastPage(pagination.lastPage);
        setPerPage(pagination.perPage);
        setCurrentPage(pagination.currentPage);
        setfrom(pagination.from);
        setTo(pagination.to);
        setUsers(response.data.result.data);
    }

    return ( 
        <div>
            <StyledParagraphy>
                <StyledStack>
                    <Pagination count={lastPage} page={currentPage} onChange={handleSearchUsers} variant="outlined" shape="rounded" color="standard" size="large"/>
                </StyledStack>
            </StyledParagraphy>
            <StyledContainer>{
                users.map((user: User) => {
                    return (
                        <UserItem key={user.hash} {...user} />
                    )
                })
            }</StyledContainer>
        </div>
    )
};

export default UserList;    