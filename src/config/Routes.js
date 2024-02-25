import Home from "../pages/Home";
import SongCreate from "../pages/song/SongCreate";
import SongList from "../pages/song/SongList";
import UserCreate from "../pages/user/UserCreate";
import UserList from "../pages/user/UserList";

export const router = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <UserCreate />,
    path: "/user/create",
  },
  {
    element: <UserList />,
    path: "/user/list",
  },
  {
    element: <UserList />,
    path: "/user/list/*",
  },
  {
    element: <SongCreate />,
    path: "/song/create",
  },
  {
    element: <SongList />,
    path: "/song/list",
  },
];
