import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import Searcher from "./components/Searcher";
import UserCard from "./containers/UserCard";

import { getGitHubUser } from "./services/users"

const App = () => {

  const [inputUser, setInputUser] = useState('Ezequieldas');
  const [userStater, setUserStater] = useState('inputUser');
  // eslint-disable-next-line no-unused-vars
  const [notFound, setNotFound] = useState(false)


  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user)

    if(userStater === 'Ezequieldas'){
      localStorage.setItem('Ezequieldas', userResponse)
    }

    if(userResponse.message === 'Not Found'){
      const { userDef } = localStorage;
      setInputUser(userDef)
      setNotFound(true)
    } else {
      setUserStater(userResponse)
    }
  }
  
  useEffect(() => {
    gettinUser(inputUser)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[inputUser])
  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '430px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }} >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userStater={userStater} />
    </Container>
  )
};

export default App;