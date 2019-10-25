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
   * Increment a passenger type
   * @param passenger {String}
   */
  static incrementPassenger = (passenger) => ({
    type: ActionsTypes.SEARCH_TRAVEL_INCREMENT_PASSENGER,
    payload: passenger
  })

  /**
   * Decrement a passenger type
   * @param passenger {String}
   */
  static decrementPassenger = (passenger) => ({
    type: ActionsTypes.SEARCH_TRAVEL_DECREMENT_PASSENGER,
    payload: passenger
  })
}