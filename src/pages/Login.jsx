import { useContext } from "react";
import { LoginModeContext } from "../context/LoginContext";
import { DarkModeContext } from "../context/MenuContext";

function Login() {
  const loginMode = useContext(LoginModeContext);
  const darkMode = useContext(DarkModeContext);
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="box p-20">
        <button onClick={loginMode.toggleLoginMode}>Login</button>
      </div>
      <div className="box p-20">
        <button onClick={darkMode.toggleLoginMode}>Dark</button>
      </div>
    </div>
  );
}

export default Login;
