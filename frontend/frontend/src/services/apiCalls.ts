import axios from "axios";
//URLS para probar servidor local. Reemplazar localBackendUrl con la direccion del api local

// const localBackendUrl = "http://localhost:4000";
// const usersUrl = localBackendUrl + "/user/list";
// const postsUrl = localBackendUrl + "/post/list/";
// const albumsUrl = localBackendUrl + "/album/list/";
// const photosUrl = localBackendUrl + "/photo/list/";
// const logsUrl = localBackendUrl + "/logs";


//URlS para probar directamente al api de jsonplaceholder y logs locales
const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts?userId="
const albumsUrl = "https://jsonplaceholder.typicode.com/albums?userId=";
const photosUrl = "https://jsonplaceholder.typicode.com/photos?albumId=";
const logsUrl = "logs.json";

const fetchUsers = async () => {
  try {
    const result = await axios.get(usersUrl);
    return result.data;
  } catch (e) {
    return [];
  }
};

const fetchUserPosts = async (userId: String) => {
  try {
    const result = await axios.get(postsUrl + userId);
    return result.data;
  } catch (e) {
    return [];
  }
};

const fetchUserAlbums = async (userId: String) => {
  try {
    const result = await axios.get(albumsUrl + userId);
    return result.data;
  } catch (e) {
    return [];
  }
};

const fetchAlbumPhotos = async (albumId: String) => {
  try {
    const result = await axios.get(photosUrl + albumId);
    return result.data;
  } catch (e) {
    return [];
  }
};

const fetchLogs = async () => {
  try {
    console.log(logsUrl);
    const result = await axios.get(logsUrl);
    return result.data;
  } catch (e) {
    return [];
  }
};

export {
  fetchUsers,
  fetchUserPosts,
  fetchUserAlbums,
  fetchAlbumPhotos,
  fetchLogs,
};
