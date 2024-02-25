import React from "react";
import Header from "../../components/Header";

function SongList() {
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
    </div>
  );
}

export default SongList;
