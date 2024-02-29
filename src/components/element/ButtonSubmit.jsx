import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function ButtonSubmit({ title, submit, submiting, styl }) {
  const [handleClick, sethandleClick] = useState(false);

  const Click = () => {
    sethandleClick(true);
    setTimeout(() => {
      sethandleClick(false);
    }, 350);
  };
  return (
    <button
      onClick={() => {
        Click();
        submit();
      }}
      disabled={submiting}
      onMouseDown={() => sethandleClick(true)}
      className={`${
        handleClick && "btn"
      }  text-white transition-all delay-150 ${
        submiting ? "p-1 rounded-full" : `px-4 py-2 rounded-lg ${styl}`
      }  font-bold text-sm hover:bg-slate-600 `}
    >
      {submiting ? (
        <div className="btnloading text-3xl text-white">
          <AiOutlineLoading />
        </div>
      ) : (
        title
      )}
    </button>
  );
}

export default ButtonSubmit;
