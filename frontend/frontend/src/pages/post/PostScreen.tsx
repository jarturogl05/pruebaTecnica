import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import PostCard from "../../components/postCard/PostCard";
import { Post } from "../../models/Post";
import usePosts from "../../hooks/usePosts";


function PostScreen() {
  
  let { userId } = useParams() || "";

  const { posts} = usePosts( userId!.toString() );

  return (
    <Grid container spacing={10}>
      {posts.map((post: Post, index: number) => (
        <Grid key={index} item xs={12}>
          <PostCard post={post}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default PostScreen;
