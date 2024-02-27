const initialState = {
  name: "amir",
  family: "",
  admin: "",
  avatar: "",
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        state: action.value,
      };
    case "logout":
      return {
        state: action.value,
      };
    default:
      return state;
  }
};
