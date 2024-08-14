const initialState = {
    settingMenu: false,
    searchMenu: false,
    notification: false,
    sidebar: true,
    load: false,
    sidebarLocation: "rightSidebar",
    sidebarTop: true,
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
          sidebarTop: false,
          sidebar: true,
        };
      case "sidebarsmall":
        return {
          ...state,
          sidebarTop: false,
          sidebar: false,
        };
      case "sidebarboth":
        return {
          ...state,
          sidebar: !state.sidebar,
        };
      case "load":
        return {
          ...state,
          load: true,
        };
      case "leftSidebar":
        return {
          ...state,
          sidebarLocation: "left",
        };
      case "rightSidebar":
        return {
          ...state,
          sidebarLocation: "right",
        };
      case "topSidebar":
        return {
          ...state,
          sidebarTop: true,
        };
      default:
        return state;
    }
  };
  