import { combineReducers } from "redux";
import { menuReducer } from "./menu/menuReducer";
import { themeReducer } from "./Theme/themeReducer";
import { adminReducer } from "./admin/adminReducer";



const rootReducer = combineReducers({
    menuReducer: menuReducer,
    themeReducer: themeReducer,
    adminReducer: adminReducer,
})

export default rootReducer


