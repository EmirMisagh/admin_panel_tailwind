import { useEffect, useState } from "react";
import { useLoginMode, LoginModeContext } from "./context/LoginContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [load, setLoad] = useState(false);
  const [login, loginMode] = useLoginMode();
  const { darkmode, boxtheme, color } = useSelector((state) => ({
    menu: state.menuReducer.settingMenu,
    darkmode: state.themeReducer.darkmode,
    sidebar: state.menuReducer.sidebar,
    color: state.themeReducer.color,
    boxtheme: state.themeReducer.boxtheme,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
      const darkMode = window.localStorage.getItem("darkmode");
      dispatch({
        type: darkMode === "light" ? "light" : "dark",
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div
      className="bg-background_body"
      theme-mode={darkmode ? "dark" : "light"}
      box-theme={boxtheme ? "defult" : "neon"}
      data-theme={color}
    >
      <LoginModeContext.Provider value={loginMode}>
        {load ? (
          login ? (
            <Dashboard />
          ) : (
            <Login />
          )
        ) : (
          <div className="w-[100%] h-[100vh]">
            <Loading />
          </div>
        )}
      </LoginModeContext.Provider>
    </div>
  );
}

export default App;
