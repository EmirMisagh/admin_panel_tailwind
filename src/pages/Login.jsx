import { useContext, useState } from "react";
import { LoginModeContext } from "../context/LoginContext";
import InputComponent from "../components/element/InputComponent";
import ButtonSubmit from "../components/element/ButtonSubmit";
// import { getUserEmail } from "../config/API";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMode = useContext(LoginModeContext);

  const loginHandle = async () => {
    // const Email = await getUserEmail(email);
    // if (Email.data.found) {
    //   if (Email.data.data.password === password) {
        loginMode.toggleLoginMode();
    //   }
    // }
  };
  return (
    <div className="grid grid-cols-8 w-full h-[100vh]">
      <div className="box p-16 col-span-5">
        <div>logo</div>
        <div className="flex mt-10 flex-col gap-4 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-textSecond_0">
              Hi, Welcome back
            </h1>
          </div>
          <div>
            <img src="/img/illustration_dashboard.png" alt="" />
          </div>
          <div className="flex gap-3">
            <img
              className="h-7 w-7 text-black"
              src="/img/ic_amplify.svg"
              alt=""
            />
            <img
              className="h-7 w-7 text-black"
              src="/img/ic_auth0.svg"
              alt=""
            />
            <img
              className="h-7 w-7 text-black"
              src="/img/ic_firebase.svg"
              alt=""
            />
            <img className="h-7 w-7 text-black" src="/img/ic_jwt.svg" alt="" />
            <img
              className="h-7 w-7 text-black"
              src="/img/ic_supabase.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="box p-20 col-span-3">
        <div className="flex flex-col gap-5 justify-center h-full">
          <div>
            <h1 className="text-2xl font-bold">Sign in to Kurdsong</h1>
            <p className="mt-3 text-textSecond_400 text-sm">
              Continue to your accont
            </p>
          </div>
          <div className="flex gap-3 mt-20 flex-col">
            <InputComponent
              title={"Email address"}
              typeInput={"text"}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {}}
              value={email}
              errors={""}
              touche={""}
            />
            <InputComponent
              title={"Password"}
              typeInput={"password"}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {}}
              value={password}
              errors={""}
              touche={""}
            />
          </div>
          <div className="mt-2">
            <ButtonSubmit
              title={"Login"}
              submit={loginHandle}
              submiting={""}
              styl={"w-full h-12"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
