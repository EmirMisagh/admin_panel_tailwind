import React, { useEffect, useCallback, useState } from "react";
import Header from "../../components/Header";
import { getSongAll } from "../../config/API";
import { DataGridSong } from "../../components/element/DataGrid";

function SongList() {
  const [song, setSong] = useState([]);

  const getSong = useCallback(async () => {
    const songData = await getSongAll();
    setSong(songData.data);
  }, []);

  useEffect(() => {
    getSong();
  }, [getSong]);
  return (
    <div>
      <div>
        <Header
          title={"List"}
          address1={"Dashbourd"}
          address2={"Song"}
          address3={"List"}
          button={"Create new"}
        />
      </div>
      <div className="p-3 px-0 rounded-2xl mt-8 box overflow-hidden">
        <DataGridSong songs={song} />
      </div>
    </div>
  );
}

export default SongList;
