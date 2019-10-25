export default class Utils {

  static nextTick = (fun) => {
    setTimeout(fun(), 0)
  }

  static scrollToStart = () => {
    window.scrollTo(0, 0)
  }
}