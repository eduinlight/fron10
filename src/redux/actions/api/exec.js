import ActionsTypes from "../../types";

export function fetching(TYPE, aditional=null){
  return {
    type: TYPE + ActionsTypes.FETCHING,
    aditional
  }
}

export function fetched(TYPE, response, aditional=null){
  return {
    type: TYPE + ActionsTypes.FETCHED,
    payload: response,
    aditional
  }
}

export function error(TYPE, response, aditional=null){
  return {
    type: TYPE + ActionsTypes.ERROR,
    payload: response,
    aditional
  }
}

export default (dispatch, TYPE, promise, aditional=null) => {
  dispatch(fetching(TYPE, aditional))
  promise.then(r => {
    dispatch(fetched(TYPE, r, aditional))
  }).catch(r => {
    dispatch(error(TYPE, r, aditional))
  })
}