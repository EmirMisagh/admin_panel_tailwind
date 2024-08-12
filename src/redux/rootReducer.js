import { combineReducers } from "redux";
import { menuReducer } from "./menu/menuReducer";
import { themeReducer } from "./Theme/themeReducer";
import { languageReducer } from "./Theme/languageReducer";
import { adminReducer } from "./admin/adminReducer";
import { apiReducer } from "./admin/apiReducer";



const rootReducer = combineReducers({
    menuReducer: menuReducer,
    themeReducer: themeReducer,
    languageReducer: languageReducer,
    adminReducer: adminReducer,
    apiReducer: apiReducer,
})

export default rootReducer


