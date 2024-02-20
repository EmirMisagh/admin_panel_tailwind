import { combineReducers } from "redux";
import { menuReducer } from "./menu/menuReducer";
import { themeReducer } from "./Theme/themeReducer";



const rootReducer = combineReducers({
    menuReducer: menuReducer,
    themeReducer: themeReducer,
})

export default rootReducer


