import React, { useCallback, useEffect, useState } from "react";
import { getSingerAll } from "../../config/API";
import Header from "../../components/Header";
import Card from "../../components/user/Card";


function SingerList() {
    const [singers, setSingers] = useState([]);

    const getSingers = useCallback(async () => {
      const singerData = await getSingerAll();
      console.log(singerData.data);
      setSingers(singerData.data);
    }, []);
  
    useEffect(() => {
      getSingers();
    }, [getSingers]);
    return (
      <div>
        <div>
          <Header
            title={"List"}
            address1={"Dashbourd"}
            address2={"Singer"}
            address3={"List"}
            button={"Create new"}
          />
        </div>
        <div className="mt-8 p-3 grid grid-cols-3 gap-5">
          {singers.map((item, index) => (
            <div key={index}>
              <Card singer={item} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default SingerList