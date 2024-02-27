import React from "react";
import Header from "../../components/Header";
import Card from "../../components/playlist/Card";

function PlaylistList() {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default PlaylistList;
