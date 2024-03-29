import axios from "axios";

export const ApiUrl = "http://localhost:8080";

async function resolve(promise) {
  const resolved = {
    data: null,
    error: null,
  };

  try {
    resolved.data = await promise;
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

// USER API _________________________________________________________________________
// __________________________________________________________________________________

async function getUserAll() {
  return await resolve(
    axios.get(`${ApiUrl}/author`).then((res) => res.data.data)
  );
}

async function getUserOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/author/${id}`).then((res) => res.data.data)
  );
}

async function getUserEmail(email) {
  return await resolve(
    await axios.get(`${ApiUrl}/author/email/${email}`).then((res) => res.data)
  );
}

async function getUserToken(email) {
  return await resolve(
    await axios.get(`${ApiUrl}/author/token/${email}`).then((res) => res.data)
  );
}

async function createUser(body) {
  return await resolve(
    axios.post(`${ApiUrl}/author/create`, body).then((res) => res.data)
  );
}

async function updateUser(id,body) {
  return await resolve(
    axios.patch(`${ApiUrl}/author/update/${id}`, body).then((res) => res.data)
  );
}

async function deleteUser(id) {
  return await resolve(
    axios.delete(`${ApiUrl}/author/delete/${id}`).then((res) => res.data)
  );
}

// SONG API _________________________________________________________________________
// __________________________________________________________________________________

async function getSongAll() {
  return await resolve(
    axios.get(`${ApiUrl}/song/`).then((res) => res.data.data)
  );
}

async function getSongOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/song/${id}`).then((res) => res.data.data)
  );
}

async function createSong(body) {
  return await resolve(
    axios.post(`${ApiUrl}/song/create`, body).then((res) => res.data)
  );
}

async function deleteSong(id) {
  return await resolve(
    axios.delete(`${ApiUrl}/song/delete/${id}`).then((res) => res.data)
  );
}

// SINGER API _________________________________________________________________________
// __________________________________________________________________________________

async function getSingerAll() {
  return await resolve(
    axios.get(`${ApiUrl}/singer/`).then((res) => res.data.data)
  );
}

async function getSingerOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/singer/${id}`).then((res) => res.data.data)
  );
}

async function createSinger(body) {
  return await resolve(
    axios.post(`${ApiUrl}/singer/create`, body).then((res) => res.data)
  );
}

// PLAYLIST API _________________________________________________________________________
// __________________________________________________________________________________

async function getPlaylistAll() {
  return await resolve(
    axios.get(`${ApiUrl}/playlist/`).then((res) => res.data.data)
  );
}

async function getPlaylistOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/playlist/${id}`).then((res) => res.data.data)
  );
}

async function createPlaylist(body) {
  return await resolve(
    axios.post(`${ApiUrl}/playlist/create`, body).then((res) => res.data)
  );
}

async function addSongToPlaylist(id,body) {
  return await resolve(
    axios.post(`${ApiUrl}/playlist/song/add/${id}`, body).then((res) => res.data)
  );
}

// ALBUM API _________________________________________________________________________
// __________________________________________________________________________________

async function getAlbumAll() {
  return await resolve(
    axios.get(`${ApiUrl}/album/`).then((res) => res.data.data)
  );
}

async function getAlbumOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/album/${id}`).then((res) => res.data.data)
  );
}

async function createAlbum(body) {
  return await resolve(
    axios.post(`${ApiUrl}/album/create`, body).then((res) => res.data)
  );
}

// CATEGORY API _________________________________________________________________________
// __________________________________________________________________________________

async function getCategoryAll() {
  return await resolve(
    axios.get(`${ApiUrl}/category/`).then((res) => res.data.data)
  );
}

async function getCategoryOne(id) {
  return await resolve(
    axios.get(`${ApiUrl}/category/${id}`).then((res) => res.data.data)
  );
}

async function createCategory(body) {
  return await resolve(
    axios.post(`${ApiUrl}/category/create`, body).then((res) => res.data)
  );
}

// FILE API _________________________________________________________________________
// __________________________________________________________________________________

async function uploadImageApi(key, body) {
  switch (key) {
    case "useravatar":
      return await resolve(
        axios.post(`${ApiUrl}/upload/user/avatar`, body).then((res) => res.data)
      );
    case "songimage":
      return await resolve(
        axios.post(`${ApiUrl}/upload/song/image`, body).then((res) => res.data)
      );
    case "songmusic":
      return await resolve(
        axios.post(`${ApiUrl}/upload/song/music`, body).then((res) => res.data)
      );
    case "singeravatar":
      return await resolve(
        axios
          .post(`${ApiUrl}/upload/singer/avatar`, body)
          .then((res) => res.data)
      );
    case "playlistimage":
      return await resolve(
        axios
          .post(`${ApiUrl}/upload/playlist/image`, body)
          .then((res) => res.data)
      );
    case "albumimage":
      return await resolve(
        axios
          .post(`${ApiUrl}/upload/album/image`, body)
          .then((res) => res.data)
      );
    case "categoryimage":
      return await resolve(
        axios
          .post(`${ApiUrl}/upload/category/image`, body)
          .then((res) => res.data)
      );
    default:
      break;
  }
}

async function getFilesAll() {
  return await resolve(
    axios.get(`${ApiUrl}/file/all/`).then((res) => res.data.data)
  );
}

async function deleteFile(body) {
  return await resolve(
    axios.post(`${ApiUrl}/file/remove/`, body).then((res) => res.data)
  );
}
// EXPORT ___________________________________________________________________________
// __________________________________________________________________________________

export {
  getUserOne,
  getUserAll,
  createUser,
  getUserEmail,
  getUserToken,
  updateUser,
  uploadImageApi,
  createSong,
  getSongAll,
  getSongOne,
  deleteSong,
  getSingerAll,
  getSingerOne,
  getPlaylistAll,
  getPlaylistOne,
  createPlaylist,
  addSongToPlaylist,
  getAlbumAll,
  getAlbumOne,
  createAlbum,
  createCategory,
  getCategoryOne,
  getCategoryAll,
  createSinger,
  getFilesAll,
  deleteUser,
  deleteFile,
};
