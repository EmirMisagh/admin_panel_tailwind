import { Suspense } from "react";
import { useLoginMode, LoginModeContext } from "./context/LoginContext";
import FuncyLoding from "./config/FuncyLoding";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const [login, loginMode] = useLoginMode();
  const { darkmode, boxtheme } = useSelector((state) => ({
    menu: state.menuReducer.settingMenu,
    darkmode: state.themeReducer.darkmode,
    sidebar: state.menuReducer.sidebar,
    color: state.themeReducer.color,
    boxtheme: state.themeReducer.boxtheme,
  }));
  return (
    <div
      className="bg-background_body p-2"
      theme-mode={darkmode ? "dark" : "light"}
      box-theme={boxtheme ? "defult" : "neon"}
    >
      <Suspense fallback={<FuncyLoding />}>
        <LoginModeContext.Provider value={loginMode}>
          {login ? <Dashboard /> : <Login />}
        </LoginModeContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
