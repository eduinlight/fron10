import exec from './exec'
import Http from '../../../utils/http'
import Config from '../../../config';
import ActionsTypes from '../../types';

export default class ApiActions {
  /**
   * Reset an api call
   * @param {String} type The action type of the api call
   * @returns An action
   */
  static reset = (type) => ({
    type: type + ActionsTypes.RESET
  })

  /**
   * Get all the countries from the api
   * @returns An action
   */
  static getCountries = () => dispatch => {
    exec(
      dispatch,
      ActionsTypes.API_GET_COUNTRIES,
      Http.get(`${Config.apiUrl}/country`)
    )
  }

}