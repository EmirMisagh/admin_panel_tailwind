const initialState = {
  language: "English",
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
    case "Turkish":
      return {
        language: "Turkish",
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
