import { useEffect, useState, useRef } from "react";
import { useLoginMode, LoginModeContext } from "./context/LoginContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [login, loginMode] = useLoginMode();
 

  const darkmode = useSelector((state) => state.themeReducer.darkmode);
  const color = useSelector((state) => state.themeReducer.color);
  const boxtheme = useSelector((state) => state.themeReducer.boxtheme);
  const load = useSelector((state) => state.menuReducer.load);

  const tableRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      const darkMode = window.localStorage.getItem("darkmode");
      const sidebar = window.localStorage.getItem("sidebar");
      const language = window.localStorage.getItem("language");
      const sidebarDirection = window.localStorage.getItem("sidebarDirection");
      dispatch({
        type: darkMode === "light" ? "light" : "dark",
      });
      dispatch({
        type: sidebar === "true" ? "sidebarbig" : "sidebarsmall",
      });
      dispatch({
        type: language,
      });
      dispatch({
        type: sidebarDirection,
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div
      ref={tableRef}
      className="bg-background_body"
      theme-mode={darkmode ? "dark" : "light"}
      box-theme={boxtheme ? "defult" : "neon"}
      data-theme={color}
    >
      <LoginModeContext.Provider value={loginMode}>
        {load ? (
          login ? (
            <Dashboard tableRef={tableRef} />
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
