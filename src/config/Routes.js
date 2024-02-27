import Home from "../pages/Home";
import PlaylistList from "../pages/playlist/PlaylistList";
import PlaylistCreate from "../pages/playlist/PlaylistCreate";
import SingerCreate from "../pages/singer/SingerCreate";
import SingerList from "../pages/singer/SingerList";
import SongCreate from "../pages/song/SongCreate";
import SongList from "../pages/song/SongList";
import UserCard from "../pages/user/UserCard";
import UserCreate from "../pages/user/UserCreate";
import UserList from "../pages/user/UserList";

export const router = [
  {
    element: <Home />,
    path: "/",
  },

   // User -------------------------------------------------

  {
    element: <UserCreate />,
    path: "/user/create",
  },
  {
    element: <UserList />,
    path: "/user/list",
  },
  {
    element: <UserCard />,
    path: "/user/card",
  },
  {
    element: <UserList />,
    path: "/user/list/*",
  },

   // Song -------------------------------------------------

  {
    element: <SongCreate />,
    path: "/song/create",
  },
  {
    element: <SongList />,
    path: "/song/list",
  },

  // Singer -------------------------------------------------

  {
    element: <SingerCreate />,
    path: "/singer/create",
  },
  {
    element: <SingerList />,
    path: "/singer/list",
  },

   // Playlist -------------------------------------------------

   {
    element: <PlaylistCreate />,
    path: "/playlist/create",
  },
  {
    element: <PlaylistList />,
    path: "/playlist/list",
  },
];
