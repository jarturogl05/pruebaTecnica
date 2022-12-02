import React, { useEffect, useState } from "react";
import Grid  from "@mui/material/Grid/Grid";
import UserCard from "../../components/userCard/UserCard";
import { User } from "../../models/User";
import useUsers from "../../hooks/useUsers";

function HomeScreen() {
  const { users } = useUsers();
  return (
    <Grid container spacing={10}>
      
      {users ? users.map((user: User, index: number) => (
        <Grid key={index} item lg={4} md={6} xs={12} >
          <UserCard user={user}/>
        </Grid>
      )) : (<>loading</>)}
    </Grid>
  );
}

export default HomeScreen;
