import { useContext, useState } from "react";
import { LoginModeContext } from "../context/LoginContext";
import InputComponent from "../components/element/InputComponent";
import ButtonSubmit from "../components/element/ButtonSubmit";
import { getUserEmail } from "../config/API";
import MyModal from "../components/element/Modal";
import { useDispatch } from "react-redux";
import useMode from "../config/Language";

function Login() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageTitle, setModalMessageTitle] = useState("");

  const dispatch = useDispatch();
  const Language = useMode()
  const loginMode = useContext(LoginModeContext);

  const loginHandle = async () => {
    setSubmitting(true);

    const Email = await getUserEmail(email);
    if (Email.data.found) {
      if (Email.data.data.password === password) {
        if (
          Email.data.data.admin === "Admin" ||
          Email.data.data.admin === "Manager"
        ) {
          dispatch({
            type: "login",
            value: Email.data.data,
          });
          loginMode.toggleLoginMode();
          window.localStorage.setItem("token", Email.data.data.token);
          window.localStorage.setItem("name", Email.data.data.name);
          window.localStorage.setItem("family", Email.data.data.family);
          window.localStorage.setItem("admin", Email.data.data.admin);
          window.localStorage.setItem("avatar", Email.data.data.avatar);
          window.localStorage.setItem("email", Email.data.data.email);
        } else {
          setModalMessage("You not accses");
          setIsModal(true);
          setSubmitting(false);
          setModalMessageTitle("Payment successful");
          return;
        }
      } else {
        setModalMessage("Password is invalid");
        setPasswordError("Password is invalid");
        setIsModal(true);
        setSubmitting(false);
        setModalMessageTitle("Payment successful");
        return;
      }
    } else {
      setModalMessage("Email not found");
      setEmailError("Email not found");
      setIsModal(true);
      setSubmitting(false);
      setModalMessageTitle("Payment successful");
      return;
    }
    setTimeout(() => {
      setSubmitting(false);
      // loginMode.toggleLoginMode();
    }, 500);
    // const Email = await getUserEmail(email);
    // if (Email.data.found) {
    //   if (Email.data.data.password === password) {
    //   }
    // }
  };
  return (
    <div className="grid grid-cols-8 w-full p-0 h-[100vh]">
      <div className="box p-16 col-span-5">
        <div>logo</div>
        <div className="flex mt-10 flex-col gap-4 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-textSecond_50">
              {Language.loginPage.left}
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
            <h1 className="text-2xl font-bold text-textSecond_100">{Language.loginPage.rightTop}</h1>
            <p className="mt-3 text-textSecond_400 text-sm">
            {Language.loginPage.rightBottom}
            </p>
          </div>
          <div className="flex gap-3 mt-20 flex-col">
            <InputComponent
              title={Language.loginPage.inputOwn}
              typeInput={"text"}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={() => {}}
              value={email}
              errors={emailError}
              touche={true}
            />
            <small>{emailError}</small>
            <InputComponent
              title={Language.loginPage.inputTwo}
              typeInput={"password"}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={() => {}}
              value={password}
              errors={passwordError}
              touche={true}
            />
            <small>{passwordError}</small>
          </div>
          <div className="mt-2 flex justify-center">
            <ButtonSubmit
              title={Language.loginPage.button}
              submit={loginHandle}
              submiting={isSubmitting}
              styl={"w-full h-12 bg-bg_0 text-textSecond_900"}
            />
          </div>
        </div>
      </div>
      <MyModal
        isModal={isModal}
        ModalMessage={modalMessage}
        title={modalMessageTitle}
        closeModal={() => setIsModal(false)}
      />
    </div>
  );
}

export default Login;
