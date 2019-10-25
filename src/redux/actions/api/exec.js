import ActionsTypes from "../../types";

/** 
 * Create a fetching action
 * @param TYPE {String} the action type
 * @param aditional {Object} aditional information to set on aditional action param
 * @returns a fetching action type
 */
export function fetching(TYPE, aditional = null) {
  return {
    type: TYPE + ActionsTypes.FETCHING,
    aditional
  }
}

/** 
 * Create a fetched action
 * @param TYPE {String} the action type
 * @param response {Object} response object
 * @param aditional {Object} aditional information to set on aditional action param
 * @returns a fetched action type
 */
export function fetched(TYPE, response, aditional = null) {
  return {
    type: TYPE + ActionsTypes.FETCHED,
    payload: response,
    aditional
  }
}

/** 
 * Create an error action
 * @param TYPE {String} the action type
 * @param response {Object} response object
 * @param aditional {Object} aditional information to set on aditional action param
 * @returns an error action type
 */
export function error(TYPE, response, aditional = null) {
  return {
    type: TYPE + ActionsTypes.ERROR,
    payload: response,
    aditional
  }
}

/** 
 * Handle a promise for redux library
 * @author Eduin Garcia Cordero
 * @param dispatch {Function} the dispatch function of redux
 * @param TYPE {String} the action type to handle
 * @param promise {Promise} the promise object product of an api call with axios
 * @param aditional {Object} aditional information to set on aditional action param
 */
export default (dispatch, TYPE, promise, aditional = null) => {
  dispatch(fetching(TYPE, aditional))
  promise.then(r => {
    dispatch(fetched(TYPE, r, aditional))
  }).catch(r => {
    dispatch(error(TYPE, r, aditional))
  })
}