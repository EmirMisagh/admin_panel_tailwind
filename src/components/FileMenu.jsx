import ButtonSubmit from "./element/ButtonSubmit";
import { deleteFile } from "../config/API";
import { useNavigate } from "react-router-dom";

function FileMenu({ file, select, selectHandle }) {
  const navigate = useNavigate();
  const name = file.split("/");
  const type = name.join("/").split(".");
  const deleteHandle = async (file) => {
    const remove = await deleteFile({
      url: "https://kurdsong.storage.iran.liara.space/" + file,
    });
    console.log(remove);
    navigate("/file");
  };
  return (
    <>
      <div
        className={`${file && select ? "w-80 " : "w-0"}
    h-[100vh] transition-all delay-200 fixed justify-between bg-bg_700 right-0 top-0 z-[9999999] flex flex-col`}
      >
        <div className="bg-background_box py-7 px-4">
          <h2 className="text-textSecond_50">Info</h2>
        </div>
        <div className="flex-1 bg-bg_900 py-3 px-4 pr-6 flex flex-col">
          <div className=" border-b border-color_border_500">
            {type[type.length - 1] === "jpg" ? (
              <img
                className="h-40 rounded-lg"
                src={`https://kurdsong.storage.iran.liara.space/${file}`}
                alt=""
              />
            ) : (
              <audio
                controls
                src={`https://kurdsong.storage.iran.liara.space/${file}`}
              ></audio>
            )}
            <div className="py-5 text-textSecond_100">
              <p>{name[name.length - 1]}</p>
            </div>
          </div>
          <div className="mt-6 text-textSecond_400">
            <p className="text-textSecond_100">Propertise</p>
            <div className="grid grid-cols-3 gap-4 mt-3">
              <div className=" text-sm col-span-1">
                <small>Size</small>
              </div>
              <div className=" text-sm col-span-2">
                <small>2.2Mb</small>
              </div>
              <div className=" text-sm col-span-1">
                <small>Modified</small>
              </div>
              <div className=" text-sm col-span-2">
                <small>28 Feb 2024 5:54 PM</small>
              </div>
              <div className=" text-sm col-span-1">
                <small>Type</small>
              </div>
              <div className=" text-sm col-span-2 ">
                <small>Image</small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background_box py-5 px-4 flex flex-col w-full gap-5 text-textSecond_100">
          <p>File Share With</p>
          <ButtonSubmit
            title={"Delete"}
            submit={() => deleteHandle(file)}
            submiting={""}
            styl="bg-themered100 py-3 text-white"
          />
        </div>
      </div>
      <div
        className={`${file && select ? "w-[100vw] " : "w-0"}
    h-[100vh] transition-all delay-200 fixed justify-between bg-bg_coverblack_200 left-0 top-0 z-[999999] flex flex-col`}
        onClick={selectHandle}
      ></div>
    </>
  );
}

export default FileMenu;
