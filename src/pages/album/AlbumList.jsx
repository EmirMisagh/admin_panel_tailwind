import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import Card from "../../components/playlist/Card";
import { getAlbumAll } from "../../config/API";

function AlbumList() {
    const [album, setAlbum] = useState([]);

    const getAlbum = useCallback(async () => {
      const albumData = await getAlbumAll();
      setAlbum(albumData.data);
    }, []);
  
    useEffect(() => {
      getAlbum();
    }, [getAlbum]);
  return (
    <div>
    <div>
      <Header
        title={"List"}
        address1={"Dashbourd"}
        address2={"Album"}
        address3={"List"}
        button={"Create new"}
      />
    </div>
    <div className="mt-8 p-3 grid grid-cols-2 gap-5">
      {album.map((item, index) => (
        <>
          <Card playlist={item} key={index} />
        </>
      ))}
    </div>
  </div>
  )
}

export default AlbumList