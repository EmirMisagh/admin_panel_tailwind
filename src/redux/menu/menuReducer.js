const initialState = {
    settingMenu: false,
    searchMenu: false,
    notification: false,
    sidebar: true,
  };
  
  export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case "menu":
        return {
          ...state,
          settingMenu: !state.settingMenu,
        };
      case "searchmenu":
        return {
          ...state,
          searchMenu: !state.searchMenu,
        };
      case "notification":
        return {
          ...state,
          notification: !state.notification,
        };
      case "sidebarbig":
        return {
          ...state,
          sidebar: true,
        };
      case "sidebarsmall":
        return {
          ...state,
          sidebar: false,
        };
      case "sidebarboth":
        return {
          ...state,
          sidebar: !state.sidebar,
        };
      default:
        return state;
    }
  };
  