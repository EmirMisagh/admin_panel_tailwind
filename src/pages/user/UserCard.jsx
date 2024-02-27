import React, { useCallback, useEffect, useState } from "react";
import { getUserAll } from "../../config/API";
import Header from "../../components/Header";
import Card from "../../components/user/Card";

function UserCard() {
  const [users, setUsers] = useState([]);

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
          title={"Card"}
          address1={"Dashbourd"}
          address2={"User"}
          address3={"Card"}
          button={"Create new"}
        />
      </div>
      <div className="mt-8 p-3 grid grid-cols-3 gap-5">
        {users.map((item, index) => (
          <div key={index}>
            <Card singer={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
