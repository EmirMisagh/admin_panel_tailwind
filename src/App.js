import { Suspense, useEffect, useState } from "react";
import { useLoginMode, LoginModeContext } from "./context/LoginContext";
import FuncyLoding from "./config/FuncyLoding";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";


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

  useEffect(() => {
    setTimeout(() => {
      
      setLoad(true);
    }, 1000);
  }, []);

  return (
    <div
      className="bg-background_body"
      theme-mode={darkmode ? "dark" : "light"}
      box-theme={boxtheme ? "defult" : "neon"}
      data-theme={color}
    >
      <Suspense fallback={<FuncyLoding />}>
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
      </Suspense>
    </div>
  );
}

export default App;
