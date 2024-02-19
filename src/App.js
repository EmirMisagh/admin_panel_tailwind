import { Suspense } from "react";
import { useLoginMode, LoginModeContext } from "./context/LoginContext";
import { useDarkMode, DarkModeContext } from "./context/MenuContext";
import FuncyLoding from "./config/FuncyLoding";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [login, loginMode] = useLoginMode();
  const [darkMode, darkModeHandle] = useDarkMode();
  return (
    <div
      className="bg-background_body p-2"
      theme-mode={darkMode ? "dark" : "light"}
      box-theme="defult"
    >
      <Suspense fallback={<FuncyLoding />}>
        <LoginModeContext.Provider value={loginMode}>
          <DarkModeContext.Provider value={darkModeHandle}>
            {login ? <Dashboard /> : <Login />}
          </DarkModeContext.Provider>
        </LoginModeContext.Provider>
      </Suspense>
    </div>
  );
}

export default App;
