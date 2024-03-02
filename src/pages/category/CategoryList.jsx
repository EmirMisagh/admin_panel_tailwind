import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import Card from "../../components/playlist/Card";
import { getCategoryAll } from "../../config/API";
import { TbError404 } from "react-icons/tb";

function CategoryList() {
  const [category, setCategory] = useState([]);

  const getCategory = useCallback(async () => {
    const categoryData = await getCategoryAll();
    setCategory(categoryData.data);
  }, []);

  useEffect(() => {
    getCategory();
  }, [getCategory]);
  return (
    <div>
      <div>
        <Header
          title={"List"}
          address1={"Dashbourd"}
          address2={"Category"}
          address3={"List"}
          button={"Create new"}
        />
      </div>
      <div className="mt-8 p-3 grid grid-cols-2 gap-5">
        {category.length === 0 && (
          <h1 className=" text-textSecond_100 text-xl">
            Not Found Category.
            <i className="text-5xl">
              <TbError404 />
            </i>
          </h1>
        )}
        {category.map((item, index) => (
          <>
            <Card playlist={item} key={index} />
          </>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
