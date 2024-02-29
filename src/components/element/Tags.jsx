import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Tags({
  title,
  typeInput,
  onChange,
  value,
  errors,
  name,
  onBlur,
  touche,
}) {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const keyHandle = (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      console.log(event.key);
      const find = tags.find((i) => i === input);
      if (tags.length < 4 && !find) {
        setTags([...tags, input]);
        onChange([...tags, input]);
        setInput("");
      }
    }
  };

  const removeHandle = (value) => {
    setTags(tags.filter((item) => item !== value));
    onChange(tags.filter((item) => item !== value));
  };
  return (
    <div
      className={`p-4 pl-2 text-textgray100 relative flex items-center gap-3 flex-wrap${
        errors && touche ? "border-red-600" : "border-color_border_600"
      } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-color_border_100  InputComponent `}
      style={{ background: "rgb(0,0,0,0)" }}
    >
      <div className="flex gap-2 flex-wrap">
        {tags.map((item, index) => (
          <Tag tag={item} key={index} removeHandle={removeHandle} />
        ))}
      </div>
      <input
        className=" outline-none w-auto"
        type={`text`}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={(event) => keyHandle(event)}
        name={name}
      />
      <span
        className={`absolute left-3 font-bold InputComponentSpan  ${
          value
            ? errors && touche
              ? "text-red-600 top-[-10px] text-[0.80rem] font-bold z-50"
              : "text-textSecond_500 top-[-10px] text-[0.80rem] font-bold z-50"
            : errors && touche
            ? "text-red-600 top-[14px]"
            : "text-textSecond_500 top-[14px]"
        }   bg-background_box pl-1 ml-1 pr-1`}
      >
        {title}
      </span>
    </div>
  );
}

const Tag = ({ tag, removeHandle }) => {
  return (
    <div
      onClick={() => removeHandle(tag)}
      className=" cursor-pointer bg-blue-300 hover:bg-blue-200 text-textSecond_100 py-1 px-2 rounded-lg text-xs flex gap-1 items-center"
    >
      {tag}
      <i className="text-lg text-textSecond_50">
        <IoIosCloseCircleOutline />
      </i>
    </div>
  );
};

export default Tags;
