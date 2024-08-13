import { createContext, useState, useMemo } from "react";
import { getUserToken } from "../config/API";
import { useDispatch } from "react-redux";

export const LoginModeContext = createContext({
  toggleLoginMode: () => {},
});

export const useLoginMode = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  useMemo(async () => {
    const token = window.localStorage.getItem("token");
    const language = window.localStorage.getItem("language");
    if (language) {
      dispatch({
        type: language,
      });
    }
    if (token) {
      try {
        const email = await getUserToken(token);
        if (email.data.data.token === token) {
          setLogin(true);
          setTimeout(() => {
            dispatch({
              type: "load",
            });
          }, 4000);
        }
        return;
      } catch (error) {
        console.log(error);
        dispatch({
          type: "load",
        });
      }
    } else {
      dispatch({
        type: "load",
      });
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
