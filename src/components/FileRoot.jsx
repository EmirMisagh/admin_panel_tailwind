import React, { useMemo, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FcFolder, FcImageFile, FcAudioFile  } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import FileMenu from "./FileMenu";

function FileRoot({ root, dir }) {
  const [files, setFiles] = useState([]);

  useMemo(() => {
    if (dir === "root")
      setFiles(
        root
          .filter(
            (obj, index) =>
              root.findIndex((item) => item.root === obj.root) === index
          )
          .reverse()
      );
    else if (dir === "root2") {
      setFiles(
        root.filter(
          (obj, index) =>
            root.findIndex((item) => item.index === obj.index) === index
        )
      );
    } else if (dir === "root3") {
      setFiles(
        root.filter(
          (obj, index) =>
            root.findIndex((item) => item.seccond === obj.seccond) === index
        )
      );
    }
  }, [root, dir]);

  const linkHandle = (value) => {
    const linkContainer = root[0];
    if (value === "root2")
      return (
        <NavLink to={`/files/${linkContainer.root}`}>
          {linkContainer.root}
        </NavLink>
      );
    if (value === "root3") return linkContainer.index;
  };

  return (
    <div className="py-3">
      <div className="flex items-center gap-3 text-textSecond_50">
        <div className=" rounded-full bg-bg_800 text-lg p-3">
          <FaFolder />
        </div>
        <div>
          <b>Kurdsong</b>
          <p className="flex items-center gap-2 text-textSecond_300 playfair">
            <small>
              <NavLink to="/files">root</NavLink>
            </small>
            <small> /</small>
            {dir === "root2" ? (
              <small>{linkHandle("root2")}</small>
            ) : (
              dir === "root3" && (
                <>
                  <small>{linkHandle("root2")}</small>
                  <small> /</small>
                  <small>{linkHandle("root3")}</small>
                </>
              )
            )}
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-textSecond_300 bg-bg_800 items-center gap-5 py-4 my-3 mt-6 px-5 rounded-2xl border border-color_border_500">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex-1">Name</div>
          <div>Size</div>
          <div>Type</div>
        </div>
      </div>
      <div className="grid gap-3">
        {files.map((item, index) => (
          <Type data={item} key={index} dir={dir} />
        ))}
      </div>
    </div>
  );
}

const Type = ({ data, dir }) => {
  const [file, setFile] = useState("");
  const [select, setSelect] = useState(false);

  const IconHandle = (value) => {
    if (dir === "root") {
      const name = value.root.split(".");
      if (name.length === 1) return <FcFolder />;
      if (name[name.length - 1] === "jpg") return <FcImageFile />;
      if (name[name.length - 1] === "mp3") return <FcAudioFile />;
    } else if (dir === "root2") {
      const name = value.index.split(".");
      if (name.length === 1) return <FcFolder />;
      if (name[name.length - 1] === "jpg") return <FcImageFile />;
      if (name[name.length - 1] === "mp3") return <FcAudioFile />;
    } else if (dir === "root3") {
      const name = value.seccond.split(".");
      if (name.length === 1) return <FcFolder />;
      if (name[name.length - 1] === "jpg") return <FcImageFile />;
      if (name[name.length - 1] === "mp3") return <FcAudioFile />;
    }
  };

  const linkHandle = (value) => {
    if (dir === "root") {
      const name = value.root.split(".");
      if (name.length === 1) return `./${value.root}`;
    } else if (dir === "root2") {
      const name = value.index.split(".");
      if (name.length === 1) return `./${value.index}`;
    } else if (dir === "root3") {
      const name = value.seccond.split(".");
      if (name.length === 1) return `./${value.seccond}`;
    }
  };

  const typeHandle = (value) => {
    if (dir === "root") {
      const name = value.root.split(".");
      if (name.length === 1) return "Folder";
      if (name[name.length - 1] === "jpg") return "Image";
      if (name[name.length - 1] === "mp3") return "Audio";
    } else if (dir === "root2") {
      const name = value.index.split(".");
      if (name.length === 1) return "Folder";
      if (name[name.length - 1] === "jpg") return "Image";
       if (name[name.length - 1] === "mp3") return "Audio";
    } else if (dir === "root3") {
      const name = value.seccond.split(".");
      if (name.length === 1) return "Folder";
      if (name[name.length - 1] === "jpg") return "Image";
       if (name[name.length - 1] === "mp3") return "Audio";
    }
  };

  const fileShow = (value) => {
    if (dir === "root") {
      const name = value.root.split(".");
      if (name.length === 1) setFile("");
      if (name[name.length - 1] === "jpg") {
        setFile(name.join("."));
        setSelect(true);
      }
    } else if (dir === "root2") {
      const name = value.index.split(".");
      if (name.length === 1) setFile("");
      if (name[name.length - 1] === "jpg") {
        setFile(value.root + "/" + name.join("."));
        setSelect(true);
      }
    } else if (dir === "root3") {
      const name = value.seccond.split(".");
      if (name.length === 1) setFile("");
      if (name[name.length - 1] === "jpg") {
        setFile(value.root + "/" + value.index + "/" + name.join("."));
        setSelect(true);
      }
      if (name[name.length - 1] === "mp3") {
        setFile(value.root + "/" + value.index + "/" + name.join("."));
        setSelect(true);
      }
    }
  };

  return (
    <>
      <NavLink to={linkHandle(data)}>
        <div
          onClick={() => fileShow(data)}
          className="
    flex justify-between text-textSecond_50 items-center gap-5 py-4 px-5 rounded-2xl hover:bg-background_box hover:shadow-xl cursor-pointer transition-all delay-100
    border border-color_border_600"
        >
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div className="flex-1 flex items-center gap-3">
            <i className=" text-4xl">{IconHandle(data)}</i>
            {dir === "root"
              ? data.root
              : dir === "root2"
              ? data.index
              : data.seccond}
          </div>
          <div>22.5Mb</div>
          <div> {typeHandle(data)}</div>
        </div>
      </NavLink>
      <FileMenu
        file={file}
        select={select}
        selectHandle={() => setSelect(false)}
      />
    </>
  );
};

export default FileRoot;
