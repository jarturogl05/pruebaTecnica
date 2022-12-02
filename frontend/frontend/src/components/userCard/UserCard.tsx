import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { User } from "../../models/User";
import Link from "@mui/material/Link";



interface UserCardPropsI {
  user: User;
}

function UserCard({user}: UserCardPropsI) {
  return (
    <Card >
     <CardContent>
        <Typography variant="h5" component="div">
          {user.username}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.name}
        </Typography>
        <Typography variant="body1">
        {user.website}
        </Typography>
        <Typography variant="body2">
        {user.email}
        </Typography>
        <Typography variant="body2">
        {user.phone}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" component={Link} href={"/posts/" + user.id} >Posts</Button>
      <Button size="small" component={Link} href={"/albums/" + user.id}>Albums</Button>

    </CardActions>
    </Card>
  );
}

export default UserCard;
