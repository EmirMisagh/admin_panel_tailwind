import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Lyrics({
  title,
  typeInput,
  onChange,
  value,
  errors,
  name,
  onBlur,
  touche,
}) {
  const [line, setLine] = useState(value);
  const [input, setInput] = useState("");
  const [min, setMin] = useState("");
  const [second, setSecond] = useState("");
  const [minEnd, setMinEnd] = useState("");
  const [secondEnd, setSecondEnd] = useState("");
  const keyHandle = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      console.log(event.key);
      setLine([
        ...value,
        {
          lyrics: input,
          timeStart: parseInt(min) * 60 + parseInt(second),
          timeEnd: parseInt(minEnd) * 60 + parseInt(secondEnd),
        },
      ]);
      onChange([
        ...value,
        {
          lyrics: input,
          timeStart: parseInt(min) * 60 + parseInt(second),
          timeEnd: parseInt(minEnd) * 60 + parseInt(secondEnd),
        },
      ]);
      setInput("");
      setMin("");
      setSecond("");
    }
  };

  const removeHandle = (value) => {
    setLine(line.filter((item) => item.lyrics !== value.lyrics));
    onChange(line.filter((item) => item.lyrics !== value.lyrics));
  };
console.log(value)
  return (
    <>
      <div className="my-4 py-5 flex flex-col gap-4 ">
        {value.map((item, index) => (
          <TextLyrics Text={item} key={index} removeHandle={removeHandle} />
        ))}
      </div>
      <div className="grid  gap-4">
        <div
          className={`p-4 pl-2  w-full text-textgray100 relative flex items-center gap-3 flex-wrap${
            errors && touche ? "border-red-600" : "border-color_border_600"
          } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-color_border_100  InputComponent `}
          style={{ background: "rgb(0,0,0,0)" }}
        >
          <input
            className=" outline-none w-[100%] pl-3  bg-transparent text-textSecond_50"
            type={`text`}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(event) => keyHandle(event)}
            name={name}
            placeholder="Lyrics text"
          />
          <span
            className={`absolute left-3 font-bold InputComponentSpan  ${
              value
                ? errors && touche
                  ? "text-red-600 top-[-11px] text-[0.80rem] font-bold z-10"
                  : "text-textSecond_500 top-[-11px] text-[0.80rem] font-bold z-10"
                : errors && touche
                ? "text-red-600 top-[14px]"
                : "text-textSecond_500 top-[14px]"
            }   bg-background_box pl-1 ml-1 pr-1`}
          >
            {title}
          </span>
        </div>
        <div className="flex gap-3">
          <div
            className={`p-4 pl-2 w-full text-textgray100 relative flex items-center gap-3 flex-wrap${
              errors && touche ? "border-red-600" : "border-color_border_600"
            } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-color_border_100  InputComponent `}
            style={{ background: "rgb(0,0,0,0)" }}
          >
            <input
              className=" outline-none w-[100%] pl-3 bg-transparent text-textSecond_50"
              type={`text`}
              onChange={(e) => setMin(e.target.value)}
              value={min}
              onKeyDown={(event) => keyHandle(event)}
              name={"min"}
              placeholder="min"
            />
            <input
              className=" outline-none w-[100%] pl-3 bg-transparent text-textSecond_50"
              type={`text`}
              onChange={(e) => setSecond(e.target.value)}
              value={second}
              onKeyDown={(event) => keyHandle(event)}
              name={"second"}
              placeholder="Sec"
            />
            <span
              className={`absolute left-3 font-bold InputComponentSpan  ${
                value
                  ? errors && touche
                    ? "text-red-600 top-[-11px] text-[0.80rem] font-bold z-10"
                    : "text-textSecond_500 top-[-11px] text-[0.80rem] font-bold z-10"
                  : errors && touche
                  ? "text-red-600 top-[14px]"
                  : "text-textSecond_500 top-[14px]"
              }   bg-background_box pl-1 ml-1 pr-1`}
            >
              Time
            </span>
          </div>
          <div
            className={`p-4 pl-2 w-full text-textgray100 relative flex items-center gap-3 flex-wrap${
              errors && touche ? "border-red-600" : "border-color_border_600"
            } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-color_border_100  InputComponent `}
            style={{ background: "rgb(0,0,0,0)" }}
          >
            <input
              className=" outline-none w-[100%] pl-3 bg-transparent text-textSecond_50"
              type={`text`}
              onChange={(e) => setMinEnd(e.target.value)}
              value={minEnd}
              onKeyDown={(event) => keyHandle(event)}
              name={"min"}
              placeholder="min"
            />
            <input
              className=" outline-none w-[100%] pl-3 bg-transparent text-textSecond_50"
              type={`text`}
              onChange={(e) => setSecondEnd(e.target.value)}
              value={secondEnd}
              onKeyDown={(event) => keyHandle(event)}
              name={"second"}
              placeholder="Sec"
            />
            <span
              className={`absolute left-3 font-bold InputComponentSpan  ${
                value
                  ? errors && touche
                    ? "text-red-600 top-[-11px] text-[0.80rem] font-bold z-10"
                    : "text-textSecond_500 top-[-11px] text-[0.80rem] font-bold z-10"
                  : errors && touche
                  ? "text-red-600 top-[14px]"
                  : "text-textSecond_500 top-[14px]"
              }   bg-background_box pl-1 ml-1 pr-1`}
            >
              Time End
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const TextLyrics = ({ Text, removeHandle }) => {
  return (
    <div
      onClick={() => removeHandle(Text)}
      className=" cursor-pointer bg-blue-200 hover:bg-blue-100 text-theme200 py-1 px-2 rounded-lg text-sm flex justify-between gap-1 items-center"
    >
      <p>{Text.lyrics}</p>
      <p>
        {Text.timeStart} {">"} {Text.timeEnd}{" "}
      </p>
      <i className="text-lg text-textSecond_50">
        <IoIosCloseCircleOutline />
      </i>
    </div>
  );
};

export default Lyrics;
