import React,{useEffect, useState, useCallback} from "react";
import FileBox from "../components/box/sm/FileBox";
import FileRoot from "../components/FileRoot";
import { Route, Routes } from "react-router-dom";
import { getFilesAll } from "../config/API";
import { FaDropbox } from "react-icons/fa6";
import { GrOnedrive } from "react-icons/gr";
import { FaGoogleDrive } from "react-icons/fa";



function Files() {
  const [directory, setDirectory] = useState([]);

  const getDirectory = useCallback(async () => {
    const directoryData = await getFilesAll();
    console.log(directoryData.data);
    setDirectory(directoryData.data);
  }, []);

  useEffect(() => {
    getDirectory();
  }, [getDirectory]);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <FileBox icon={<FaDropbox />} title={"Dropbox"} color={'text-themeblue100'} />
      </div>
      <div>
        <FileBox icon={<FaGoogleDrive />} title={"Drive"} color={'text-themered100'} />
      </div>
      <div>
        <FileBox icon={<GrOnedrive />} title={"OneDrive"} color={'text-themegreen100'} />
      </div>
      <div className="col-span-2">
        <Routes>
          <Route path="/" element={<FileRoot root={directory} dir={"root"} />} />

          {directory.map((item, index) => (
            <Route
              key={index}
              path={`/${item.root}`}
              element={
                <FileRoot
                  root={directory.filter((i) => {
                    return i.root === item.root;
                  })}
                  dir={"root2"}
                />
              }
            />
          ))}
          {directory.map((item, index) => (
            <Route
              key={index}
              path={`/${item.root}/${item.index}`}
              element={
                <FileRoot
                  root={directory.filter((i) => {
                    return i.root === item.root && i.index === item.index;
                  })}
                  dir={"root3"}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default Files;
