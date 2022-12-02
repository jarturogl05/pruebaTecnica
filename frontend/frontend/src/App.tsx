import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/home/HomeScreen";
import AppBarComponent from "./components/appBar/AppBar";
import PostScreen from "./pages/post/PostScreen";
import AlbumsScreen from "./pages/albums/AlbumsScreen";
import PhotosScreen from "./pages/photos/PhotosScreen";
import LogsScreen from "./pages/logs/LogsScreen";

function App() {
  return (
    <Grid container direction={"column"}>
      <AppBarComponent />
      <Container maxWidth="md" sx={{ p: 4 }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path="posts/:userId" element={<PostScreen/>} />
            <Route path="albums/:userId" element={<AlbumsScreen/>} />
            <Route path="photos/:albumId" element={<PhotosScreen />} />
            <Route path="logs/" element={<LogsScreen/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Grid>
  );
}

export default App;
