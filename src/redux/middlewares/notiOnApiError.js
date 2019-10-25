import ActionsTypes from "../types";
import Noti from "../../utils/noti";

/**
 * Error notification with an api call response diferent of 200 just for fron10 team
 */
export default store => next => action => {
  if (action.type.startsWith("API_") && action.type.endsWith(ActionsTypes.ERROR)) {
    Noti.error("Please, check your internet connection. (THIS IS JUST AN EXAMPLE)")
  }
  next(action)
}