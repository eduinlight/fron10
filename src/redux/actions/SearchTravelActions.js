import ActionsTypes from "../types"

export default class SearchTravelActions {

  /**
   * Reset the search travel form
   */
  static reset = () => ({
    type: ActionsTypes.SEARCH_TRAVEL_RESET,
  })

  /**
   * Change an atribute on the search travel form
   * @param key {String}
   * @param value {String}
   */
  static change = (key, value) => ({
    type: ActionsTypes.SEARCH_TRAVEL_CHANGE,
    payload: { key, value }
  })

  /**
   * Change a passenger type
   * @param passenger {String}
   * @param passenger {Number}
   */
  static changePassenger = (passenger, value) => ({
    type: ActionsTypes.SEARCH_TRAVEL_CHANGE_PASSENGER,
    payload: {
      passenger,
      value
    }
  })

}