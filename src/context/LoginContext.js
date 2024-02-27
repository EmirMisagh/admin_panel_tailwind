import { createContext, useState, useMemo } from "react";
import { getUserToken } from "../config/API";



export const LoginModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useLoginMode = () => {
  const [login, setLogin] = useState(false);

  useMemo(async () => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    if (token) {
      try {
        const email = await getUserToken(token);
        console.log(email);
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
