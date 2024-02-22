import React, { useCallback, useEffect, useState } from "react";
import { getUserAll } from "../../config/API";
import { DataGridUser, DataNavbar } from "../../components/element/DataGrid";
import Header from "../../components/Header";

function UserList() {
  const [user, setUsers] = useState([]);

  const getUser = useCallback(async () => {
    const userData = await getUserAll();
    console.log(userData.data);
    setUsers(userData.data);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div>
      <div>
        <Header
          title={"List"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"List"}
        />
      </div>
      <div className="p-3 px-0 rounded-2xl mt-8 box overflow-hidden">
        <div className="border-b border-b-color_border_600 pb-[10px]">
          <DataNavbar />
        </div>
        <div>
          <DataGridUser users={user} />
        </div>
      </div>
    </div>
  );
}

export default UserList;
