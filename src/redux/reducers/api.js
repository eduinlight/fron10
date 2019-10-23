import { combineReducers } from "redux";
import ActionsTypes from "../types";
import produce from "immer";

const ini = {
  status: "",
  response: null
};

/**
 *  Create a reducer to handle API CALLS
 * @param {String} CALL is the type of action to catch
 */

const getReducer = CALL => produce((state = ini, action) => {
  switch (action.type) {
    case CALL + ActionsTypes.RESET: {
      state = ini
      break
    }
    case CALL + ActionsTypes.FETCHING: {
      state.status = ActionsTypes.FETCHING
      break
    }
    case CALL + ActionsTypes.FETCHED: {
      state.status = ActionsTypes.FETCHED
      state.response = action.payload
      break
    }
    case CALL + ActionsTypes.ERROR: {
      state.status = ActionsTypes.ERROR
      state.response = action.payload
      break
    }
    default: {
      console.log("SIEMPRE ENTRA ACA")
      return state
    }
  }
});

export default combineReducers({
  getCountries: getReducer(ActionsTypes.API_GET_COUNTRIES),
});
