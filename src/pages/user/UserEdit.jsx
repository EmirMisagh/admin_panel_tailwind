import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import NavbarEdit from "../../components/user/NavbarEdit";
import { Route, Routes, useParams } from "react-router-dom";
import Accont from "./Accont";
import Security from "./Security";
import { getUserOne } from "../../config/API";

function UserEdit() {
  const [user, setUsers] = useState([]);
  const { id } = useParams();

  const getUser = useCallback(async () => {
    const userData = await getUserOne(id);
    setUsers(userData.data);
    console.log(userData.data);
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div>
      <div>
        <Header
          title={"Create a new user"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"New User"}
        />
      </div>
      <div>
        <NavbarEdit />
      </div>
      <div className="mt-9">
        <Routes>
          <Route path="/" element={<Accont />} />
          <Route path="/edit" element={<Accont />} />
          <Route path="/security" element={<Security user={user} />} />
        </Routes>
      </div>
    </div>
  );
}

export default UserEdit;
