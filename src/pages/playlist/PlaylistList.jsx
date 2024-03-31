import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import Card from "../../components/playlist/Card";
import { getPlaylistAll } from "../../config/API";
import { NavLink } from "react-router-dom";

function PlaylistList() {
  const [playlist, setPlaylist] = useState([]);

  const getPlaylist = useCallback(async () => {
    const playlistData = await getPlaylistAll();
    setPlaylist(playlistData.data);
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [getPlaylist]);
  return (
    <div>
      <div>
        <Header
          title={"List"}
          address1={"Dashbourd"}
          address2={"Playlist"}
          address3={"List"}
          button={"Create new"}
        />
      </div>
      <div className="mt-8 p-3 grid grid-cols-2 gap-5">
        {playlist.map((item, index) => (
          <NavLink to={`/playlist/${item._id}`} key={index}>
            <Card playlist={item} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default PlaylistList;
