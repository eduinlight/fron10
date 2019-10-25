import ActionsTypes from "../types";
import Noti from "../../utils/noti";

export default store => next => action => {
  if (action.type.startsWith("API_") && action.type.endsWith(ActionsTypes.ERROR)) {
    Noti.error("Please, check your internet connection. (THIS IS JUST AN EXAMPLE)")
  }
  next(action)
}