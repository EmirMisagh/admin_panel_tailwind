import React, { useCallback, useEffect, useState } from "react";
import { getUserAll } from "../../config/API";
import { DataGridUser } from "../../components/element/DataGrid";

function UserList() {
  const [user, setUsers] = useState([]);

  const getUser = useCallback(async () => {
    const userData = await getUserAll();
    console.log(userData.data);
    setUsers(userData);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return <div>
    <DataGridUser user={user} />
  </div>;
}

export default UserList;
