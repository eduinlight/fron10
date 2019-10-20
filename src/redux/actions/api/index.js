import exec from './exec'
import Http from '../../../util/http'
import Config from '../../../config';
import ActionsTypes from '../../types';

export default class ApiActions {
  static reset = (type) => ({
    type: type + ActionsTypes.RESET
  })

  static getCountries = () => dispatch => {
    exec(
      dispatch,
      ActionsTypes.API_GET_COUNTRIES,
      Http.get(`${Config.apiCotizaUrl}/country/?limit=${Number.MAX_SAFE_INTEGER}`)
    )
  }

}
