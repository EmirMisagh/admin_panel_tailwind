import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

function ButtonSubmit({ title, submit }) {
  const [handleClick, sethandleClick] = useState(false);

  const Click = () => {
    sethandleClick(true);
    setTimeout(() => {
      sethandleClick(false);
    }, 350);
  };
  return (
    <button
      onClick={() => {Click() ; submit()}}
      onMouseDown={() => sethandleClick(true)}
      className={`${
        handleClick && "btn"
      } bg-black text-white px-4 py-2 font-bold text-sm rounded-lg `}
    >
      {title}
    </button>
  );
}

export default ButtonSubmit;
