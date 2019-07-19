import { FETCH_DATA, SUCCESS, FAILURE } from /* we need our action types here*/ "../actions";
const initialState = {
  isLoading: false,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SUCCESS: {
      const newData = action.payload
      return {
        ...state,
        isLoading: false,
        characters: newData
      }
    }
    case FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message
      }
    }
    default:
      return state;
  }
};
