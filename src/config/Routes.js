import { lazy } from "react";


const Home = lazy(() => import("../pages/Home"));
const Files = lazy(() => import("../pages/Files"));
const SingerList = lazy(() => import("../pages/singer/SingerList"));
const SingerCreate = lazy(() => import("../pages/singer/SingerCreate"));
const SongCreate = lazy(() => import("../pages/song/SongCreate"));
const SongList = lazy(() => import("../pages/song/SongList"));
const UserCard = lazy(() => import("../pages/user/UserCard"));
const UserCreate = lazy(() => import("../pages/user/UserCreate"));
const UserList = lazy(() => import("../pages/user/UserList"));
const PlaylistList = lazy(() => import("../pages/playlist/PlaylistList"));
const PlaylistCreate = lazy(() => import("../pages/playlist/PlaylistCreate"));


export const router = [
  {
    element: <Home />,
    path: "/",
  },

  {
    element: <Files />,
    path: "/files",
  },
  {
    element: <Files />,
    path: "/files/*",
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
