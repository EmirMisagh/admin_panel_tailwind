import React from "react";
import {
  SidebarModeContext,
  useSidebarMode,
  SettingModeContext,
  useSettingMode
} from "../context/MenuContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { router } from "../config/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SettingMenu from "../components/SettingMenu";

function Dashboard() {
  const [sidebarMode, sidebarModeHandle] = useSidebarMode();
  const [, settingModeHandle] = useSettingMode();
  return (
    <Router>
      <SidebarModeContext.Provider value={sidebarModeHandle}>
        <SettingModeContext.Provider value={settingModeHandle}>
          <div
            className={`font-nunito bg-body grid grid-cols-1 transt overflow-hidden ${
              sidebarMode ? "md:grid-cols-9" : "md:grid-cols-12"
            } relative`}
          >
            <div
              className={`sidebar transt ${
                sidebarMode ? "col-span-2" : "col-span-1"
              } border-r border-gray400 relative h-full top-0`}
            >
              <Sidebar />
            </div>
            <div
              className={`main transt overflow-y-scroll notscroll h-[100vh] ${
                sidebarMode ? "col-span-7" : "col-span-11"
              }`}
            >
              <Topbar />
              <Routes>
                {router.map((route, index) => (
                  <Route
                    path={route.path}
                    element={route.element}
                    key={index}
                  />
                ))}
              </Routes>
            </div>
            <div className="menues">
              <SettingMenu />
              Menues
            </div>
          </div>
        </SettingModeContext.Provider>
      </SidebarModeContext.Provider>
    </Router>
  );
}

export default Dashboard;
