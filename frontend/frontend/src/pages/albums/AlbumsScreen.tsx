import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

import { Album } from "../../models/Album";
import AlbumCard from "../../components/albumCard/AlbumCard";
import useAlbums from "../../hooks/useAlbums";

function AlbumsScreen() {
  let { userId } = useParams() || "";

  const { albums } = useAlbums(userId!.toString());

  return (
    <Grid container spacing={4} alignItems="stretch">
      {albums.map((album: Album, index: number) => (
        <Grid key={index} item lg={4} md={6} xs={12}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AlbumsScreen;
