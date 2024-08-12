import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { router } from "../config/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SettingMenu from "../components/SettingMenu";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Search from "./Search";

function Dashboard({ tableRef }) {
  const sidebar = useSelector((state) => state.menuReducer.sidebar);
  const sidebarLocation = useSelector(
    (state) => state.menuReducer.sidebarLocation
  );

  return (
    <Router>
      <div
        className={`font-nunito bg-body grid grid-cols-1 overflow-hidden ${
          sidebar ? "md:grid-cols-9" : "md:grid-cols-12"
        } relative`}
      >
        {sidebarLocation === "left" ? (
          <>
            <div
              className={`sidebar  ${
                sidebar ? "col-span-2" : "col-span-1"
              } border-r border-color_border_500 relative h-full top-0`}
            >
              <Sidebar />
            </div>
            <div
              className={`main  overflow-y-scroll notscroll h-[100vh] ${
                sidebar ? "col-span-7" : "col-span-11"
              }`}
            >
              <Topbar />
              <div className="py-0 px-14 pb-20 relative">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    {router.map((route, index) => (
                      <Route
                        path={route.path}
                        element={route.element}
                        key={index}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={`main  overflow-y-scroll notscroll h-[100vh] ${
                sidebar ? "col-span-7" : "col-span-11"
              }`}
            >
              <Topbar />
              <div className="py-0 px-14 pb-20 relative">
                <Suspense fallback={<Loading />}>
                  <Routes>
                    {router.map((route, index) => (
                      <Route
                        path={route.path}
                        element={route.element}
                        key={index}
                      />
                    ))}
                  </Routes>
                </Suspense>
              </div>
            </div>
            <div
              className={`sidebar  ${
                sidebar ? "col-span-2" : "col-span-1"
              } ${sidebarLocation === "left" ? 'border-r' : 'border-l'} border-color_border_500 relative h-full top-0`}
            >
              <Sidebar />
            </div>
          </>
        )}
        <div className="menues">
          <SettingMenu tableRef={tableRef} />
          <Search />
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
