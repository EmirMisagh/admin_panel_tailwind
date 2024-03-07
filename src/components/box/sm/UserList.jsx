import React from "react";

function UserList({ users }) {
  return (
    <div className="w-full py-3 pb-0 box rounded-2xl">
      <div className="grid text-[0.8rem]">
        <div className="flex justify-between gap-5 py-4 text-[1rem] px-6 font-bold text-textSecond_500">
          <div className="flex-1">Name</div>
          <div className="w-24 text-center"></div>
        </div>
        <div className="px-2">
          {users.map(
            (item, i) =>
              i < 5 && (
                <div
                  key={i}
                  className={`flex justify-between gap-5 items-center px-4 border-b text-textSecond_400 border-color_border_700 font-body transition-all delay-100
                     py-2
                  `}
                >
                  <div className="flex-1 flex items-center gap-3">
                    <div className="">
                      <b className=" text-textSecond_200">
                        {item.name + " " + item.family}
                      </b>
                      <p className=" text-textgray400">{item.email}</p>
                    </div>
                  </div>
                  <div className=" flex justify-center items-center"></div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
