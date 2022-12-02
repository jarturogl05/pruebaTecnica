import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

import { Album } from "../../models/Album";
import AlbumImage from "../../assets/album.png";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

interface AlbumCardPropsI {
  album: Album;
}

const cardStyle = {
  transitionDuration: "0.3s",
  height: "300px",
};

function AlbumCard({ album }: AlbumCardPropsI) {
  return (
    <Card style={cardStyle}>
      <CardActionArea href={"/photos/"+ album.id}>
        <CardMedia
          component="img"
          height="140"
          image={AlbumImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body1">{album.title}</Typography>
        </CardContent>
      </CardActionArea>
    
      <CardActions >
        
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
  
    </Card>
  );
}

export default AlbumCard;
