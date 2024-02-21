import Home from "../pages/Home";
import UserCreate from "../pages/user/UserCreate";

export const router = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <UserCreate />,
    path: "/user/create",
  },
];
