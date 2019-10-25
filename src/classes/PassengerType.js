export default class PassengerType {

  static ADULTS = "adults"
  static SENIORS = "seniors"
  static YOUTH = "youth"
  static CHILD = "child"
  static SEAT_INFANT = "seatInfant"
  static LAP_INFANT = "lapInfant"
  /**
   * Create a passenger type
   * @param id {Number}
   * @param name {String}
   * @param count {Number}
   */
  constructor(id, name, count = 0) {
    this.id = id
    this.name = name
    this.count = count
  }
}