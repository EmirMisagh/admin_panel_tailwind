const initialState = {
    server: "http://localhost:8080",
  };
  
  export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case "setAPI":
        return {
          state: action.value,
        };
      default:
        return state;
    }
  };