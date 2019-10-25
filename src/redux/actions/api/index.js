import exec from './exec'
import Http from '../../../utils/http'
import Config from '../../../config';
import ActionsTypes from '../../types';

export default class ApiActions {

  /**
   * Reset an api call
   */
  static reset = (type) => ({
    type: type + ActionsTypes.RESET
  })

  /**
   * Get countries from API
   */
  static getCountries = () => dispatch => {
    exec(
      dispatch,
      ActionsTypes.API_GET_COUNTRIES,
      Http.get(`${Config.apiUrl}/country`)
    )
  }

}