

function InputComponent({
  title,
  typeInput,
  onChange,
  value,
  errors,
  name,
  onBlur,
  touche,
  icon,
}) {
  return (
    <div className="w-full p-0  relative rounded-lg grid items-center ">
      <input
        type={`${typeInput}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className={`p-4 pl-5 text-textSecond_200 z-40 ${
          errors && touche ? "border-red-600" : "border-color_border_600"
        } text-sm font-bold w-full z-20 bg-none outline-none rounded-lg  border focus:border-color_border_100  InputComponent `}
        style={{ background: "rgb(0,0,0,0)" }}
      />
      <span
        className={`absolute left-3 font-bold InputComponentSpan flex gap-2 items-center  ${
          value
            ? errors && touche
              ? "text-red-600 top-[-10px] text-[0.80rem] font-bold z-50"
              : "text-textSecond_500 top-[-10px] text-[0.80rem] font-bold z-50"
            : errors && touche
            ? "text-red-600 top-[14px]"
            : "text-textSecond_500 top-[14px]"
        }   bg-background_box pl-1 ml-1 pr-1`}
      >
        {icon}
        {title}
      </span>
      <small className="mt-1 text-red-600"> {errors && touche && errors}</small>
    </div>
  );
}

export default InputComponent;
