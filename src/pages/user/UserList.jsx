import React, { useCallback, useEffect, useState } from "react";
import { getUserAll } from "../../config/API";
import { DataGridUser, DataNavbar } from "../../components/element/DataGrid";

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
    <div className="p-3 px-0 rounded-2xl mt-8 box overflow-hidden">
      <div className="border-b border-b-color_border_600 pb-[10px]">
        <DataNavbar />
      </div>
      <div>
        <DataGridUser users={user} />
      </div>
    </div>
  );
}

export default UserList;
