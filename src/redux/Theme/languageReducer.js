const initialState = {
  language: "French",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "English":
      return {
        language: "English",
      };
    case "French":
      return {
        language: "French",
      };
    case "Persian":
      return {
        language: "Persian",
      };
    case "French":
      return {
        language: "French",
      };
    case "French":
      return {
        language: "French",
      };
    case "French":
      return {
        language: "French",
      };
    default:
      return state;
  }
};
