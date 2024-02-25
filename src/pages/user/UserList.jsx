import React, { useCallback, useEffect, useState } from "react";
import { getUserAll } from "../../config/API";
import { DataGridUser } from "../../components/element/DataGrid";
import Header from "../../components/Header";
import { Routes, Route } from "react-router-dom";
import DataNavbar from "../../components/user/Navbar";

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
          button={"Create new"}
        />
      </div>
      <div className="p-3 px-0 rounded-2xl mt-8 box overflow-hidden">
        <div className="border-b border-b-color_border_600 pb-[10px]">
          <DataNavbar />
        </div>
        <div>
          <Routes>
            <Route path={"/"} element={<DataGridUser users={user} />} />
            <Route
              path={"/active"}
              element={
                <DataGridUser users={user.filter((i) => i.accses === true)} />
              }
            />
            <Route
              path={"/banned"}
              element={
                <DataGridUser users={user.filter((i) => i.accses === false)} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserList;
