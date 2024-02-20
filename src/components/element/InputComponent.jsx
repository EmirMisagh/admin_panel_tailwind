import React, { useState } from "react";

function InputComponent({
  title,
  typeInput,
  style,
  set,
  value,
  errors,
  touched,
}) {
  const [input, setInput] = useState("");

  return (
    <div className="w-full p-0  relative rounded-lg grid items-center ">
      <input
        type={`${typeInput}`}
        onChange={(e) => {
          set(e.target.value);
          setInput(e.target.value);
        }}
        className={`p-4 pl-5 text-textgray100 ${
          errors ? "border-red-600" : "border-gray500"
        } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-gray50  InputComponent `}
        style={{ background: "rgb(0,0,0,0)" }}
      />
      <span
        className={`absolute left-3 font-bold InputComponentSpan  ${
          input
            ? errors
              ? "text-red-600 top-[-9px] text-[0.80rem] font-bold z-50"
              : "text-textgray300 top-[-9px] text-[0.80rem] font-bold z-50"
            : errors
            ? "text-red-600 top-[14px]"
            : "text-textgray500 top-[14px]"
        }   bg-box pl-1 ml-1 pr-1`}
      >
        {title}
      </span>
      <small className="mt-1 text-red-600">
        {errors && "Invalid email address"}
      </small>
    </div>
  );
}

export default InputComponent;
