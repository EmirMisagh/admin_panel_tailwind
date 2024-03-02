import { createContext, useState, useMemo } from "react";
import { getUserToken } from "../config/API";



export const LoginModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useLoginMode = () => {
  const [login, setLogin] = useState(false);

  useMemo(async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      try {
        const email = await getUserToken(token);
        if (email.data.data.token === token) {
          setLogin(true);
        }
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const loginMode = useMemo(
    () => ({
      toggleLoginMode: () => {
        setLogin(true);
        window.localStorage.setItem("login", "true");
      },
    }),
    []
  );

  return [login, loginMode];
};
