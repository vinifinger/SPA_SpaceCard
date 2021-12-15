import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import UserCard from '../../components/UserCard';
import { User, UserValue }  from '../../interfaces/user';
import { Redirect, useHistory, useParams } from 'react-router-dom';

interface Params {
  username: string;
}

function UserPage() {
  const [user, setUser] = useState<User>(UserValue);
  const { username } = useParams<Params>();
  const history = useHistory();

    useEffect(() => {
      async function searchUser() {
        
        try {
          const response = await api.get(`/user/${username}`);
          console.log(response.data.result);
          setUser(response.data.result);
          
        } catch (error) {
          throw error;
        } 
      }

      searchUser();
    }, []);
  return (
    <div>
      <UserCard {...user}/>
    </div>
  );
}

export default UserPage;
