import { combineReducers } from "redux";
import ActionsTypes from "../types";

const ini = {
  status: "",
  response: null
};

/**
 *  Create a reducer to handle API CALLS
 * @param {String} CALL is the type of action to catch
 */

const getReducer = CALL => (state = { ...ini }, action) => {
  switch (action.type) {
    case CALL + ActionsTypes.RESET: {
      return {
        ...ini
      };
    }
    case CALL + ActionsTypes.FETCHING: {
      return {
        ...state,
        status: ActionsTypes.FETCHING
      };
    }

    case CALL + ActionsTypes.FETCHED: {
      return {
        ...state,
        status: ActionsTypes.FETCHED,
        response: action.payload
      };
    }

    case CALL + ActionsTypes.ERROR: {
      return {
        ...state,
        status: ActionsTypes.ERROR,
        response: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  
});
