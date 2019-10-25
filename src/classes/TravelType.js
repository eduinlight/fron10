export default class TravelType {

  static ROUND_TRIP = 1
  static ONE_WAY = 2
  static MULTI_CITY = 3
  /**
   * Create a travel type
   * @param id {Number}
   * @param name {String}
   */
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}