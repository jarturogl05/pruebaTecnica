import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

import { Post } from "../../models/Post";


interface PostCardPropsI {
  post: Post;
}



function PostCard({ post }: PostCardPropsI) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{post.title}</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
