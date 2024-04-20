import { lazy } from "react";
import UserEdit from "../pages/user/UserEdit";


const Home = lazy(() => import("../pages/Home"));
const Files = lazy(() => import("../pages/Files"));
const SingerList = lazy(() => import("../pages/singer/SingerList"));
const SingerEdit = lazy(() => import("../pages/singer/SingerEdit"));
const SingerCreate = lazy(() => import("../pages/singer/SingerCreate"));
const SongCreate = lazy(() => import("../pages/song/SongCreate"));
const SongEdit = lazy(() => import("../pages/song/SongEdit"));
const SongList = lazy(() => import("../pages/song/SongList"));
const UserCard = lazy(() => import("../pages/user/UserCard"));
const UserCreate = lazy(() => import("../pages/user/UserCreate"));
const UserList = lazy(() => import("../pages/user/UserList"));
const PlaylistList = lazy(() => import("../pages/playlist/PlaylistList"));
const PlaylistEdit = lazy(() => import("../pages/playlist/PlaylistEdit"));
const PlaylistCreate = lazy(() => import("../pages/playlist/PlaylistCreate"));
const AlbumCreate = lazy(() => import("../pages/album/AlbumCreate"));
const AlbumList = lazy(() => import("../pages/album/AlbumList"));
const CategoryList = lazy(() => import("../pages/category/CategoryList"));
const CategoryCreate = lazy(() => import("../pages/category/CategoryCreate"));


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
    element: <UserEdit />,
    path: "/user/:id",
  },
  {
    element: <UserEdit />,
    path: "/user/:id/*",
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
  {
    element: <SongEdit />,
    path: "/song/:id",
  },
  {
    element: <SongEdit />,
    path: "/song/:id/*",
  },

  // Singer -------------------------------------------------

  {
    element: <SingerCreate />,
    path: "/singer/create",
  },
  {
    element: <SingerEdit />,
    path: "/singer/:id",
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
    element: <PlaylistEdit />,
    path: "/playlist/:id",
  },
  
  {
    element: <PlaylistList />,
    path: "/playlist/list",
  },

   // Album -------------------------------------------------

  {
    element: <AlbumCreate />,
    path: "/album/create",
  },
  {
    element: <AlbumList />,
    path: "/album/list",
  },

   // Category -------------------------------------------------

   {
    element: <CategoryCreate />,
    path: "/category/create",
  },
  {
    element: <CategoryList />,
    path: "/category/list",
  },
];
