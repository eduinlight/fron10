import { combineReducers } from "redux";
import ActionsTypes from "../../types";
import produce from "immer";
import TravelType from "../../../classes/TravelType"
import TravelClass from "../../../classes/TravelClass"
import PassengerType from "../../../classes/PassengerType"

const ini = {
  travelType: TravelType.ROUND_TRIP,
  travelClass: TravelClass.ECONOMY,
  travelers: {
    [PassengerType.ADULTS]: 1,
    [PassengerType.SENIORS]: 0,
    [PassengerType.YOUTH]: 0,
    [PassengerType.CHILD]: 0,
    [PassengerType.SEAT_INFANT]: 0,
    [PassengerType.SEA]: 0,
  }
};

export default produce((state = ini, action) => {
  switch (action.type) {
    case ActionsTypes.SEARCH_TRAVEL_RESET: {
      state = ini
      break
    }
    case ActionsTypes.SEARCH_TRAVEL_CHANGE: {
      const { key, value } = action.payload
      state[key] = value
      break
    }
    case ActionsTypes.SEARCH_TRAVEL_INCREMENT_PASSENGER: {
      const passenger = action.payload
      state.travelers[passenger]++
      break
    }
    case ActionsTypes.SEARCH_TRAVEL_DECREMENT_PASSENGER: {
      const passenger = action.payload
      state.travelers[passenger]--
      break
    }
    default: {
      return state
    }
  }
})
