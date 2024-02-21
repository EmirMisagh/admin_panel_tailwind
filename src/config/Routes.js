import Home from "../pages/Home";
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
];
