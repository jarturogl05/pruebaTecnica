import React, { useEffect, useState } from "react";
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";

import { useParams } from "react-router-dom";
import { Photo } from "../../models/Photo";
import usePhotos from "../../hooks/usePhotos";



function PhotosScreen() {
  let { albumId } = useParams() || "";

  const { photos } = usePhotos( albumId!.toString() );


  const matches = useMediaQuery("(min-width:600px)");

  return (
    <ImageList cols={matches ? 3 : 1}>
      {photos.map((photo: Photo, index: number) => (
        <ImageListItem key={index}>
          <img src={photo.thumbnailUrl.toString()} />
          <ImageListItemBar  title={photo.title}
           >
            
          </ImageListItemBar>

        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default PhotosScreen;
