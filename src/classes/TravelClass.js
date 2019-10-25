export default class TravelClass {

  static ECONOMY = 1
  static PREMIUM = 2
  static BUSINESS = 3
  static FIRST = 4
  static MULTIPLE = 5
  /**
   * Create a travel class
   * @param id {Number}
   * @param name {String}
   */
  constructor(id, name) {
    this.id = id
    this.name = name
  }
}