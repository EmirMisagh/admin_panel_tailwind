const initialState = {
     darkmode: false,
     boxtheme: false,
     notification: false,
     color: 'bluesky'
 }
 
 export const themeReducer = (state = initialState, action) => {
     switch (action.type) {
         case "dark":
             return {
                ...state,
                 darkmode: true
             }
         case "light":
             return {
                ...state,
                 darkmode: false
             }
         case "boxthemeon":
             return {
                ...state,
                boxtheme: true
             }
         case "boxthemeoff":
             return {
                ...state,
                boxtheme: false
             }
         case "red":
             return {
                ...state,
                color: 'red'
             }
         case "green":
             return {
                ...state,
                color: 'green'
             }
         case "blue":
             return {
                ...state,
                color: 'blue'
             }
         case "bluesky":
             return {
                ...state,
                color: 'bluesky'
             }
         case "yellow":
             return {
                ...state,
                color: 'yellow'
             }
         case "purple":
             return {
                ...state,
                color: 'purple'
             }
         default:
             return state
     }
 }